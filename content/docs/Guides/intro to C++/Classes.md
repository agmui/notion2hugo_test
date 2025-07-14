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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN56N36Z%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBxWNEDFLCoBbwwbk4ZLKgnTZoiHMaRWGTZlTqOY5xO9AiAWowTIz%2F2OaUS9RAlSaerHlJn5hrYH6ZdjuNd%2Fop2%2Fnyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMcCiWjpbSXTDd5DixKtwDQTdZTF%2F%2F2fSuuUmPmmAJOKnATWbzNHIm6bWFHFR6aYvOGssiHn627me49WizAech2RzKyRN%2FiJDv47yhs7huTsq2momYSAEx%2BL9l5JLQB29p13plLFHjBzY%2BZ2tLRDC5FM84xidQa2wGpIz3gACuKJvzi3f2TXh6f4ehdTidVj%2B4EG8r8lSIppFNhDXVLb6wIxAXvETcc8f2hvUQLqpP%2FKefTQqViIRyNkxnBTCvI3wu%2FSkr27jTi%2Bci%2FDdMXeWw8WwpeN28koCpoeX3xGVP8QVP5E1YWcIqw5EDliK7%2BUVDGN%2FDcZ3fen0QPbiaTMP9HaBUD2xjs4JnzooL01y3xHWM9oHaIAw8%2FzRGHnzHcdK5VK85f80xi%2F4jzuRhuypKDABpindQz%2F5flVd4Kp2HccE6c5YZntFcGx5mFCY5O0jSFHOHiy0fFYidJ%2BOSPCZA3IN0JGARNZj7b%2FYeSbBeh%2FG2ZD%2BoFnrR%2BAf7aRg67lP9ITO9fOLHxLNla8dVTIFcNh5RiiJ3bjCLgyMlb2cdoSI2RGdgxQnQt1LDYYdFXKUsXztlFpjFRX8xgqCMjhCZQUDCo%2B%2BcSMaHgAbYH4t6xMbTWiSSWcMpctx3n2bZxWUCSmlb%2Ffs59U0wCGcwk6TVwwY6pgEQfv34w%2Fz4%2BBskTxqbNmlWVZ%2FCj1HsfgczcRi22bDbIzFC6PkuHjGQdRZkipbIwcsxNDfRmIRyEStttSfU5ehBT1va37FWQik8pbB%2FMjsfi6%2BSS3%2BfkGdk5T%2BV4NB6MWdQRYv4JmCTEoMT9G1HrQ9G44HMpedBEWE0mLBX8XnwbIFYZ291AUAJUdWJ00pP1Q%2FybqDDyGsyOnOBSfOox2eEga30TscS&X-Amz-Signature=e0f9d71e2553962c6947582c5b4c2fb92550fae857484f97b32cc97e288e30f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
