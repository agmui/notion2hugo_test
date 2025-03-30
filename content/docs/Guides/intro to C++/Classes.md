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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVR5BX43%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCe%2BewdbMZPSAkhw3ejWusbP3C9w5khvJjXoKNkvP7eYQIhALR8WHOJjo3Gl4cKMrTfTBxEFV3x09cR2XT0cS%2B1ReHmKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzckLy2jnJwJrYk%2FLUq3AMJBU0X7dSPPNdG5FIYznaE%2BD0Q2qm7ZA3JwgvMmJTjx0VcGNj5rS6h2y7i%2FJQ%2B8lMnkkDSLAVg0UZ3%2BfTaBZJA627ZeEEBA17zDzPnEpH4d1Z5nZg2DTzgf4zfHy1ltgsAiASnQctLNIEpddDhrWVgYm9XMkHF%2B9DN7GcVgjvLowoBRFlmqHIDWEUyuufmHzwGkV7WgNGR0dZjBywNE9Y%2FhojdCgtAYdpRMZyuVhVvw4eEF4QkMJmeGBqJJ3ZN72ev4lVKgVhn81fy4GOZavtVWycYbj197fd5NGUv5AQSHYBmCOde3lNQb9Z5ua%2Br9RwgCtW0oVCQ1txCRUn%2FwkzP%2FWynZQGkl4b2J6EV%2FqPrPYlYenlxwz734A8TZJKd8Vwp2MySYQQVQ5pGk6ELct1G%2Ba%2FNAhN3qin1yz47Vfbh4j7ePZjCBOfO837QqkN5WtgN%2FgxE0Frz4E7oT0zYKk2TxA0HjPeD%2Bzx5BW0VWPNWMZcJ643SdWY2ItvZcF6olgsSHsYhC5iZthovnsrEcdEjR1sp8k1Cb85dAgIFAomzfpkCKYI2oXEmBJ9kUhmeiEpsCy5CdyybnuvttAac6R9u2%2BL1Y8wiYbohXyYhYkCeeA%2FdTX9H7HO5utJzIjCY7qW%2FBjqkAeWk954wnaH3DtX%2FB1iqj9Fofndo9MuJtb%2BmR%2BvoSOnYLQXCCMpwoYnB4IJfhgs32tW9pt2TDdpFe2ACP64vl4ssHfR4%2BjTPkaadQBr%2BhNROAfnRiVq1NO6B4mQKs50wwUse8eU93dJDDRWdDQW8n%2BXqON5EdWCzyVyPSHMhbPRBPnTl%2BEW0PY6gZNg4D6k8n10QZznR3NRYKrEz1oJ2v7IWOYMO&X-Amz-Signature=59d12d32a3fe55fbc140d1682ee272fa34ac8acceac6f2091f71bdd9ac60ba9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
