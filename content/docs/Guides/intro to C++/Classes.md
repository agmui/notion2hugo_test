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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDKVPTY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC01xfPTOOalBI1Dvgf034qU%2Bt%2FGYro5KSa3rdV7jvepQIgKE09Dlo0j4udwhMPzKnzfsI%2F0Pe3K1cjV5PAC%2FS7DTMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPbhcCF6P4XRF1FeEyrcA9uZPEuT2yhx6MMnRGGz%2FiqK6mgFKbwLuSgGDqXapwHHK6O2XJOd4EBWaRj8quXFvNsPO69ZNChNG7XhXmFC5DLE8yHQniMSFDSLWQNyqr7sJq5KdhThgXc6KafChZlFVeKj9Y9zzIVzs98%2BBHNMs0v24Mnz0QphJo5PX6Vi7XrQknRdSIkqZ%2BR5inPWWEuwme6qG1nc5ZKFkq0BdcOE%2FzuHXXK0eOR0kYq6MDteH%2FX12P5oqTZnP%2BYzCYB1P5KCo6sqC0%2BSeffUFlNE%2BgMBbO%2B0Q5X3So5VIwxAMvx%2BugFaKzzzLu5QFqXbK%2B4pNVll2xM3hgyALdTDIMQgQGInYyflY1dRlTrVuNmZ757yNehx8%2FYykrNyPhKV6M1tezfLQaZI%2BHTqek6sxRrOrLPN8q0nk5aBmYDHG4rXNkQ9B2NtI9b1YlInrgXlmsYFA6xPT8n5Y%2FP4qUoynMBbKbfv5XlBvYJaQC28FoM7CYZgb2EugViDSpw6rsHN%2F39NHzfGh3o3EH5EnHuy%2F7kQ1mBiCa0FNsdslftfrJuwVJrwtjWzdS7cJqzAplzWCGLiLBZoH3MeihOtB3F9dcnOilp7bfkysOVUupwraZRFn3u%2B0H0yN2zB7sHzbHRY%2FQuzMJKPh8AGOqUBnJXgoi7XxdeYI6LniT1lkjQTqtQ8stz%2FSv0zVDX2XcsVxYvJyqM%2FyqlHqTEoAEbwFHTWOUg3iBEPXsYoT%2FU7kApFECnE%2FR8Bc3fVNW%2BC%2Bv8VVnlu2PULiM05kVFia5Rf4s0mxQN3ov93EwSMLyCy%2BetkDZOD2JZ65eOX4LKMRHoexGL5gIlIZxNhyt8aMbQ0nm3yr89RVjKTzVqkGgSOM1ex9VbJ&X-Amz-Signature=f9f251376685a0eab5f0541b1c7d3ab973ada1e32a3dbce0e94e4ecebad9c2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
