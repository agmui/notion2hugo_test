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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZIIXQC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGO7xqk1HnGvX4vaYIktD%2BAGBX3ukdzx3uLykC4xohOJAiEAzz9JkeBjGP%2FiAyK%2F0hg%2B8hQz2CN5K%2Bobq6GVEa6q1W8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMAD3ySYCDqwKk%2F%2BNircAzVp4SiPaUcBsOOayoBB7v%2BNVGRWPkPy8v8gSbeOMgehrGoJlicMPOhm9hlGzLw49jRDZsEgEwWuxbMDCa0vnLPacHVp0yygQ7AASLoctKD0XGlhVAtEy1kAxC6LhFl17BZnGnwLX8nPvuY%2BI7KeJI%2BHpM23BpUTT6A%2BbQ9gVpRDh9Sjjn%2BPYxlXkBZbQYcrgFXnZyoSAH4%2BhLKNZ0iaTISvgMkMiMAg7cD0373HcDxTju8l05K0WB%2BhrYMc8zkdftgGzD4AyI4xxulH6n3FdX0Sfz9ml5ie3k0u31CPc14%2FUhs5EQcOHS%2F5R7R4zO7u2bAMxFZ3D8ouTtApWzKV94KMf%2F50z9w0nY92TPYEXYUK2CphuDc1rc3hDLWDLO69qiRbMkQ7b6qjjGhry46CR6CEdEAsd%2By0CHtMM2Z1JNs7ls1E8cLY20PuFAiOglfCyPp30apACsv2FbI4pygsZe2PEdky2caAWCetu3hSVpnOh5VDLI5mNW%2FwHUv8OGpELm4MAlGP%2FrKQG8YRgynFl921pHKbp24s7OtHC0vmYJNI1FR7za9vTcteJsNODn8ZqgoT9Lu1M5ZzEuENntZn9ynZ5c0eCz98umMJ%2F%2FhEMvsLjglh1GuNtJpFYpJnMMCImcMGOqUBo4QkviNn2QANW7nKoUIi%2BWkJ5QBleEArP5A%2FG8xOaRJYlPK%2FOcWuuV6DRpT4hO0SCDfzjkoQc3I23Khxj3dZyqS1Ti72nbiYuI1UazV8T%2By8otCU%2Bay1px5Z8JTZHWEEz1pEZa%2BQLVDrUs%2BAo9AdlrOgDMjiGaLJgADeWN5q0htp7yzU8SVwBaY6Ttj9YmfhdCN3xyEuBKJ8l4ajb%2FV%2Bj4xTTUJB&X-Amz-Signature=a63cbd6b4b5ab82012ebe97cf860e86043cbf037d028c65a0a089f3aaa976ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
