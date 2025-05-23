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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3G4KL4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDY8SVfkuEbWTUvWLr1Kzi6LW2j07RFZBQ3%2FDEhdBmizgIgSDm7EH3HP9t5ih%2FpACVdYNM2Vtr0LlSxSiHnUeQ%2FU9oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0OiiVa2qlEN%2F0KUCrcAxkBFCYxf5LAR165FSK1f1aFe%2FV7RDaToYuiqSVGideaibpubL%2FbNj%2FLyAI8Y%2FMS%2F%2B%2FDd5n%2BpQyCMn4gLBynthiubTPvK2fWOnvJcJ%2Bi60E6383dPeLY5RJ3c04xSsC1ViTmKGGXXFIAIKXlUbW8VnbUQ2TmXe9arpzqqly0WXZpErX0RdQ0JoMgRHAm4YrSuYCyZxMpkhyDPOYrmNpw7i4q44FrWKvmvC7MSttkvLz2iUsagsuE4Je2GSWurq01fSlGhZWbehkEw8vv3xqbrCtnsHIODFx1I8NuTdEU6pYQvA0DXQkTE5mtVTD4tLfrxPhK5RzqvDgLd0PX0hGpbp3JghUtssb4e4b30I4iMndCTVwLO7qBSeCnosSCPfICZMH8JYEPc3Y41SNfKlaQUzWcdGJxxy03VJaHmDbv3tCFbz%2FghLI9QthzMJM0UetAqskRh6ngPb7HKqGP7yXqEJCU3yw764HX%2F92aEutobGbYDhiGmnTX0nB2p3ZnCJwIotLvYShQywkoOKr4THVzyOjtonO3ysovaqr0ewt%2FN%2BNhtQEaNDoO5ZBpk%2FCAZWAS6xbYbxdC%2BNJm6x1qF1bGeJ%2BmbRiFz2KTHY05k36TLLh5dct4eScvFnI92MRnMPLsvsEGOqUB1YFpMQp6c32aoFMZinhd6WEPRia9zY18diaHBmyrfI5sMiaqEwvLVYi8G2gl9tV6GI09%2BcwbHhH20LdKvsdEwCwKb4Y50kzjge%2BQVYP09btMlMi03Hw5puMvWqX9f9TnENMuFcgVwQlyapzbKUhUkhxr9CSpXTRjCJBRxbcGFrhn7LFDjoWsdp%2BJHOHEd%2BEEIsnh%2FlLBzLT6BzTF%2FbISM0yjTE2k&X-Amz-Signature=24fc019d5c2ce4b7b249ef8f074c4b28ec07933397152ff163ab06e1aa30552f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
