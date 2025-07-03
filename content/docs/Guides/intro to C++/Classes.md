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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPFQNOH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC%2B3jSYqDHRhUwfdI5Rlvpfd7EwrdOJdjPbqPVETZU%2F8gIgHt6v7urKlVcyz9ZuFwp5bmP6ILCiuZ06KjkPOzuB%2Fjgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWxEYRnCJx7uMllFircA%2B37H3byzFZnYFvnQY0T882dYAeuvwH5l7Z7Nkb4i5ZH24uuxTxlSPiKI0aqgZ05%2Bj5X3Mkh%2Fphft2G3BC2yqCmWdEs9DYZmLN4w9zeGF2zt7NOMKK87SdRztDIGeoXYxhFuPJa8gwia5z%2FDQSny8%2BlS0JRAlV5RgbRvXPyX%2Fb2aHFegUvK%2Bcu6yztwSU%2FGcb3YEEiiAYMCQp2BFBwqbplvLmnX54l86fAUcVi12965eoT%2BrYYyLRasC8e3LbU7fxefESNWmIBPmEhnyJMlO2d4yttVNxZLO9r%2Bn9NBs0ahH9iKzbD%2Fq2ZQQ%2B91m8vglFMlLvXJ%2B02MhVxQq3oEvzMd8twUA5f6S8AO1bmooYXiaLiaKGHKgNs4PQQy7VO%2BvjNsV50AsWgMgOiklHk9UPikAHl%2BnPFf2uf5oEhExO1ipbB9N9DktQLouI4LpSCAz60qSjz1XimiOr4HXbbcA4PaVUak6XYgrd%2BYEmQhqXHcs89XKgs2w0ySKzVL%2FRLbIA3qkpGeMJZmW3NwrgE01PJbEW%2BKjyyT9a4B0crf9BCqmAo69f5yEADg8zEA97ODKQdBC0NKTkoCweNlxJiWeAUdtWzYoByogXcQiNdclMFrVyr6C%2FVYAjI9%2FCjcAMLq3mcMGOqUBaZEQ7Gq5VY9k2w4KCXSpRhGL5NAP5pS1YOnGuWqs2iytGEhta4Rcy6ng613RPkuafsVt44wtjsiqAWTmHDMkbzWHa5f3quMeYq%2FPnR7xOHyTbrDF5lB%2BTHjYNLbcqOwspOqeNEblMMCkPmRUnfYF0wvlpczDoyiKAsl1AWfW3R5kx51X%2BOCXHdEUHQ5bCy%2BzkluCv9CQtAWSO4i9DqZ6%2Fes9JIcU&X-Amz-Signature=cb060d3327e56e7f828dcde79f414942e48d53d1f50b3cceb0ce371fb099df54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
