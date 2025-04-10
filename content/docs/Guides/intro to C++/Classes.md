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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFNUZ2F%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCF%2FN8lNbEg7fXQFrrFn4ZcV2Pyeno1ukHlf20qINPGWAIhAJIH10%2BHTBZia3t2ofiv1qALQvZl3MNwQvo0jQ483PRZKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJTNpC9qFKdsEEHtMq3AN0ADmX6fN1FjEfMa4aOGg3VEHll2J3YyzqI1wOCM1FlzPKEQC53KUJSUfe0eLMuC2XUD%2FweSC4UrNpmaB7NeR8YTOBonXna4RJZNNAbxtxQQArzH84nD5qlFHyWoGyqVdVR11X8qslKpvCIdrUMeOZB2LFK4BZNQhRWl6xzsdSMBmHfGpr4t90fuEURBZjGuXxNtVGS4728DEmS%2B84y53HDLYq%2B89NKgvba1yuFO1Fqc%2F1MekAI3kno2jr4QbjhQ3AOipT91zXfRrWx02p5amS3DF1oPiSo5KKPOrCvdM5dJMmgZnKvAsvvrM0msYmiPCczi2w1kJuMsoKYr5ipX3WlAxuDGlpjJ%2BVJvEZ55keM5zVjKzxyToa91AaaLX76%2Fk%2F24cEEXlPX3c70AhtIpSTG1%2BWzS0bcfRJ8XxLm%2BGNawCWGCcFCQC9azgK7dYekSi%2BAi0NCWDivPdmNr61oiFETyp4pos1SWRn0sH5VNvHAfDzIaRrN3F5kSA00%2BWqgynAPXnkUtMqaJv7ZIaML%2F5jtiAjobhjeqTcdXKBy2ylj0QEEysczBWjlFWDF6LBR%2F2E0nRFSlG2yF%2BMUhSGqU1Nn7LHOW9GEB%2BWDwbJO1AbWq92%2Fk9iHU7YTBtrJDC2696%2FBjqkAYQg4tnt3jG54wDhx%2BsB6PMmLprXYTxIciQ1wYZbJlUrzi750OwUalDrr35uhPOIwOdhfCMjVKG91kiCZQCZeyN4mkfNfMzr2%2FnhygipgMNlo33OAaurS0V9znL4Hd13PGXFR8KvtKgsF379JeVih8hib%2F%2FRPuLqVD7z8OANHHjByV%2FnUGlVlgj%2FIzfWS9jugsUAZsX%2B3CBlVr9xoyMdqJa4glc4&X-Amz-Signature=935b1a05f413328385c22d7b75e02432efff3727150ef9063f88c59cf1b29440&X-Amz-SignedHeaders=host&x-id=GetObject)

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
