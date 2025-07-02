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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDJC7LE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0HipGiBCJ5oNnBJgi%2Bkt69eQDWfza2WLs%2B11RrpzZNAiEAh8n9pMzm31Iw85TiQjGpK6VFmjKjkYorrtd6bijCjygqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVDtdRfK%2BcEAIyj5yrcA9ICaPtsRnhucujlC%2B927Q9Zd82XD0UxtfE0nmzElD1d1s5UqI1BeXMS17%2FHPGRazk5k5mo85kEiVI3pxW%2F%2FnnY%2FDO5e80HVtGnBC1ek3yxefKvByRCwzrCER1Ld861tP0tmKJpmO%2Bva7Fxyw6GXPEzIHtnyyFGeWLgCpMl9jkNnT2iqVNrboHgeovlupOYup0RjysLrODVrbKuY8XSepmkomTuSqiANIbEoGI0UIXNQzqrfcdAKOcA9drJ3ALpb%2FKYGJlTt%2Bkt0ltMKBkd3ZbJmcJvT0lAzz%2FVVZnaRw3NMkHqjhMgWfGrM2yqsJ4cCNCOgoZwfJ4YsdZNwdyG9yAp6l4H6BnafEIv%2Bhwlf%2F1mfzCk0CTb%2FH44RaIKwCmfFlHsbkXIwMhmpaE217agzjaSSnma1wRbs9Y%2BK22OEKwujB6nxkB8vac%2BxHm1JkBwr2XrOMoUrAVbsCugBrtN%2Bgve%2F8%2B26Fld5pl9uLTrQ%2BgxAn%2FBYdqIsCVPewIZlesZ1OkXivro%2FhsEA2AWB9AP77qS8UCOqlkMs%2BTZRoRz1Wbh%2FgZFKijneuVBzkSSUkaz1cCAN5H1QMxBrVi9zdjS9D3ABSoOHbkpg8S7zIl4euzGa86n9I06Kijr4U2D7MKudksMGOqUBDSz5uLEH43K707LzbH8rH0T%2B5W4rr%2FyWJkW00fZWUlaL6xYJt%2BiHQ49sy6KvpCEmlmfQJ2EZJh9Fp7zXr6smXfG160SMRGb3gtmMyVUJtDhh5y5EKk77QmPvwxen1j%2FqtfbDvv7FUX83IXJ%2F7MdvKoYJHpoY45ppE%2F%2FlhVR3n9%2Fbhq0RYnXBMP2QiY0eZLs1vLQukQ%2BwUE7%2F2MXIL%2BcRcSL5nZqv&X-Amz-Signature=869c2f5e8c56f275344bfab7ecb69562543b9007e4e46be351dd635ab483c82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
