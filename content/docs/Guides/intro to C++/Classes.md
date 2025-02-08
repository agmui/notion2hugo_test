---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ARTN5C%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDqtYWrxeWRc5H%2BwOfRwa0ZiliLn9jrG24CkObp%2BEfNcAiBZtZ5d5uK8v8zaODpbgy5MnqUsdv5MMDhjCATWJgPBwyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3RDGWGJ6PyuAmIPJKtwDyintu%2F%2FZ3glnUwH80gay5gl6BSI1hK9mkX3rVUhNX5lhIQcsgEMIoYtrT9RJVAT%2FK0EESZSl9gJU%2FjLuuD%2FWzd%2FFDd%2FrbHTI8FBtvXe%2BDN13Pdo7G3RW73CFkqL96aNxFIhm3cU5hzTUnUyleXcNOazFwUQJMLqLt%2FbYZV6sYRiq03s6RVIyidnddRq6KiyHhHx%2BuEYPNZ3gnxnm%2FwOpMy3FVqgThWJjp17p5r1Ch%2Bz%2FFMxDavWjdfEM4wer%2BKGLBP6WLFUyc2g2lCLbxFHImrbaom13Ro%2FxFC5bIw%2FqPb6aouQmhT5JNzMjfY8j9WDTkQKSUKNe8a1WsAtM%2FjyT0eEYSez5uJcc3pYvFNHZ9sgSaz9ulqA8mWHt%2Fq5QMXXNhe6UE0XjTDm0%2FWH2TFZCj1rjY3PSK%2FCrtRX4LWQAh7N5Vd0TvJ%2FwgHVha1us8Fpk0SI6Dm6F0JPyuCwks%2B6YMqSM2zW5b9TjOe7%2BnmCYhu9RObCM74tzgAJlriwOeGo%2FPsFfJWIaHrZG1zJtVXaHIH9O6zhXPmxIagvBzKA%2FoJ3bRu0sfV%2B3jdm4OGbV%2BXXQM1Qt4rt6EEdZtMhrlC1XXY3RseHxV3CdYaF7Hr%2Bp9o9YLdOlfpfcOEWhMCwwroadvQY6pgGsDLM1KStvH0oHt51mVOANmQAS8beaSxxho3ZHwRLSv8oXyNTrlldhcv9NuykRV44ftca80SpGrcgJToQTFTvlaWlSQq87Z%2B%2FUXHix21ym1ojSB04dLXr9YW6rlNEk3BluHbiLKQ1dHWMUDsxOzzQVc%2FE6yOx0eC%2F0Ywjyk%2FoK08LmFIG2CNPPECCJLQAmMrVu3OS8e5I%2Ff4EN9qJ%2FaPAQFZOisGRa&X-Amz-Signature=87d22e8a29078cc6e32c831fd4a4c36447968ef6c0fc6f5e47c4a05cedefec42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
