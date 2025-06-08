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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=37ffa1490bf53f2e443be7bb424d711a8e7e3e665ae481055da55552543534a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
