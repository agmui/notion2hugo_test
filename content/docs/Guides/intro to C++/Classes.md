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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZDMRDV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB27X%2F1ykPUR%2Bi78yxL9UFU6jkjO%2F2bhWoCrGUyKXsDbAiBGqeU8L3Dov0D%2F2OCKXwVThHKMQafMZT0sndqpmn3oMyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6k4%2FrE8bY5klTtMjKtwDbpAEwyVdh6WrtNnmwyNrLpEUbQDayFsJHdqtoUwesorWMQn1L0awWqWE23kzA6KWFz%2BdIevZJoL5w%2B7vVKA%2FLEo6Z89hCsK%2FZmgvKNxMl4ylMBJlZ0k3dyFvPZ7zX8BLmb7%2FP62%2Bb9D7mGKBCIo4a2JoLrlFfqp6iMC45D0GtMpQ3zXul2ZFocqwCcoxhcLkm%2FSsaup7qBZKs5Tir%2BQNyyqIPr5cwmqp7h1Hj5n3BDY%2Bfh%2BpNqbsQ1u9iu7p9ylr%2BnKVTMZFP1Tm3j4dUiHTpcCJNHt%2FlBTGj6ga4Hjk8W4OVYugqG7pxix2F2t0o7uzLWao52YGEFN6KES5%2Bias92ndTs90btdKmAEgAVEzsIitquo7q4tWiUfvbTVH1GWu28NS4hMtOXQ7pAovURUfq1%2BLnNH7b8XXPq5xLnpMrBXx1ppsrwBSlE%2FTvOH7iOPVfjuI55fAltsdpvrALYx1CgkiHaEBsjVMuV6YWbhuMTbGDiLzDXUoGPb4C8cjPGiPvmn136J5cIGqttXAvZ%2FMLuRSPAJfoDw9JxPs65rk5bWDOg3fSGhwgBqb0%2FhFo79mCqkWZZ0SZOR69wI%2BFpOJIAUBWOwYepdOvNSUrTK9yj6u0C%2B%2BWPO5Qfw4jZEw%2FvzWwQY6pgG6Aw2tT8iv2oyqkCWYSoe7uV1vu%2F7g%2BPdmV1u%2BaoNZTlLwama52ed66vxCtKpqeVmk4E%2BzYM8ZF9tqsax8MTcm4O7jb43AX4rRvQ8jUn9o%2FmJLew3cnIhOhhCtbkt4e%2BWvZRX2UGN9pBuhxwXudsIS%2Fe38ODBz7Yq%2FFCEE%2FnpBAOQwcGFc9w%2FRi2vi24uozLk%2B2Bkk%2FGN7K5LricOW98wLc0Cg8IC9&X-Amz-Signature=2888d380fbfec71d4b5dcd4e07e9dc0a40809b2cf7ab44c246a9dc8019a20266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
