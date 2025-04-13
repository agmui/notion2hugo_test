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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GFFVOP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDvuf%2B8oiM5wFH5xLxQ%2F%2Beu91PX5EdM1YiDNa0EpufZJAiEAvauSiZR%2Bq0dge9mq9FrH%2BP7gugn%2BSlPTqpQNVN1Yr40qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjfFnyeyfUov1IOpCrcA4%2FUM73oAisyRFQZUZbZV9kTX74Qh9d%2BfvYM%2BKQKyVnDfvQG%2B6xWwQWu%2BW4uZdgA8GKWaCbaCbNgTREakqAWkpV1VQbefD85tQAgcTUrJu9FrVvJwy7c%2FgXrGk6E8tVAOoxhqi%2B2kjxFgzJ0LT9cg00l3VBAUKCReogW%2BlMWLqzJDJaOCdjL6pQFgrwSxV%2BaoKxVMPpuJvxJY%2F36dLj%2BbR55aV1L6kbdIhliQtsGlGJdjbPWV8Xod9%2FPzsWDKWt2SvLGbc7dpkkGmT55KbRUutRpyKNbQOqzHDY6mE8NwFL9Bj5Tnxo3DcGOBjdojgy0xAeqBQCp%2B2Oy%2Bir39R9GwoCGkKDbnKj0c%2Bu3EW%2FeOFu%2FFPto0zaC2VAhxbLkT7tM5RWF%2FlHLrIoE2B4spmcoCNNXk1TH14N%2BevU1Zonanmlo2iUm1HNaJLjhTeDZ9d19lvZQss3bhQxCKmeZXXHnt3Iu9ePcJL2lE6fG2GQ3XvH4EEoT%2BNkFXTkCE6kFi8mnNQJXrw4YA6dXqAM%2FagXRmVAF3k8fOaIXxXr8uxSdyNMDhd7p26jw3bWGQTGAfLXNrNGGgZLJpjebhIU3aaiClmtw79zTZuHyhOc3%2F9xI2vqXr2hxTKmh%2FAbOA%2F6rMIq97r8GOqUBFAwcCLeTKR3Kfh4zzeKoB917oldEv9JVqs1VjEy4gvc4vJCAZ45zDXWbll9s9KiJcj8RMprzv4zgSMRQDMu3Ucxly2ENEwTiD5R4XZc2BjjKFOsL3xBbdxGW8luXczmRk8i1MUfWcrVsCVCp3yhqG8j7D25fwsNR%2Fw0S0KoJBXhIJAy17OsPPdX7DjZ9efsT8imkJyxp25fJq3MjuFf1kXPYEtH%2F&X-Amz-Signature=df8e6a948515522b938ed74b575b9967af43bdfc2ef842beea19b1729bb0d01d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
