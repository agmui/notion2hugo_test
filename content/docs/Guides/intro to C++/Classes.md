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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSYEIES%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhkJgGNRdNtYsPu89Bs0%2FAyuYe6PqkMV59xnsiUjrccAiA0xq6xd%2FO8wZhnPMffvS4kcWxRYW%2Bx%2BBJB9EryavE7GCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMGq7S6fT2fArIf7uvKtwDjeFLXXfJeA4B%2FmaU3i1A7brJYwSRHFrjbAJbdyY%2BxODo1edS0lm1JFLe4pThoHtnWQd8YgrlxlqmsbRW2g8nIZ8iklaBJXSnh%2BdZz0%2FEvepj%2BaKTFE8xa6srsae9%2FdWPcOWbywThE6ZzMnONTZqVWVtkyibI0z4wKSr%2B8fNCH%2BiYtZ8wos%2BNYH31V1SMuf1vWXvw6rFn89DvUYUrP1o1qYKIteiFqK%2BF6AC1jF84H0STFhYojZzKaNoH%2BjKd09UbMl0axxPiXjoAd60Y0%2BbBAB%2ByoMQ7BQEOtnYtOM1fj8sKXU4X4O0uBf5sOOVHVRUaOiAjjJR3QDuT9%2F%2FS3bqGO6I1WyPLo6d1npjHWIiHu4RPgITnWELJ4uj2jPXk0XYHZKqg8QPNmSG%2FJt4177BAOx3SSTdBXspJ46LwQw%2BRwWBWNLkYXkczIBNUHRItaPlydiA9Olnz4AFlDvDrE5CoBWAG67MLOwqRKHP%2FddAhYO7INAJOv3Iy6ZnjtON9Uxh6vdL%2FCipkS6%2BxCbFT6v2EfrEVm8qpt3FQ53xmTlcWUPCFbXNOby7zhLewFBqKp7tWNLYVAP%2BSR46LHsXkUBm77QGOR7Hnaa%2Fnq9t8VeyuORhO5QApsJWRWI8LZy4w65CkwQY6pgEx0OEHXHQD52YT2N9bceMT3G0LpCZDJ9pXFv5f2ymX3BOi3wLKi5Ke%2Fn9Fg6x0T%2BD0C%2B1rnpp55kKogDdnnDaEznLGF7TKyrpw7iZCIDba2%2ByGDfw7MbtRbunVlm5Ojlv9RLEsxsgc0VwlQCI8Npgu1snooUJ3MMBUIaU%2BX8353PAk3AWee6PDk2TDra4ptTJkFmMwebAyZevV4%2F9NTnl5R35Ky8f4&X-Amz-Signature=e0bd133a11da899276f256793dce44b8ddd0e60a5d9e3e072cb43f6e4d6d726f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
