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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCRR34H%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaOSjiIF%2Fs4pT8EeE%2BPl%2BHP6KDxwVMh81xdJoFvnYdAIhAMQCJUAPNqOZCZPMgdJNpy1TzJD2KAskD91rkHgJyC7XKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaAguX3iuNUrz087Mq3ANqwWiseoCLwqezlTHt%2FRC47np8CwHZf%2Fn9oWllF0Vhv3aoWJkOXiBw40ZRftGEbTDyngwNVu9BhFmvcjBMWQkF7yRpDXWdXgbftsBK0IJDTKPkUOiRpU1pMbl5umP5WWq1CudLQ9SCkheOkUQbpHk0xysBCVEQ%2BCM7wkQGE%2BaHkVzzSqggdP%2Fc1lQ7situwKsbyb7fcxO9FK9CxIhzAzly2Hlfm50efZyUIm2MC%2F279VFgkX5iB2fRMupQCTHMYeLAI3tb2EZc0r6r%2F2VzmhwBoExBw2DSU4B8Flhzh%2FzpUmxxkDDascoK79ONLT7xU4xPx1GIM3PadG%2Fhw9jpwlV%2BlZGQoLNZoODRaYsl%2FdU34%2FkBsLgvhV9Qlmi%2Fy6W52%2FVtMvF57Dth88swsLQwu6lt8Geuwj3JOd%2Bkhf5SqaV%2BQAyzRhrWiCoD1mQZqWhzuSM2IZ%2B3KiB4UYWhUAFUGFa2Z2bjWY8aQNu2ScobY7WC%2FUOPOoDO%2F1nxw4dRi0cjxtwcORroMOYGdaOsyUi%2B6fLmNkuh%2B6c328w5BIb3ojnxYa0Y7adovzysq7V5u1nwj2zVViL4uB6fzOaOXo76oB7f%2F508D8KJ%2BiwD17lqY4HX03oo8tlkGM1s7XLV%2BDDrjd69BjqkATvHgWrv0i5YHmOkPUx4JXSF1%2B5p51Kx%2Fw9JqxlAopf6kaggL%2BZ81RbJ7UlVcMFcDix%2BtDceS2YBnL777kUPkTZFA8vhOqDZYyX8HastaiESRGfj7zy8lnsDauml0HyKGuLaFZvoHrt0F8e4PeooJv0%2FuxJnciXtJxrF8VRoFzG6NqyimWvLoq4XUcXIes6iBn5t9XsjcWibVXxDOUqfxy3VkbJw&X-Amz-Signature=dad21a214b5949f335090e05d2eafd7fa1bb82295dc68c809fca8d936dd9dce8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
