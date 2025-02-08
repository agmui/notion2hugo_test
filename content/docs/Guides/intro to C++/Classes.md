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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BEXPA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF5FZbUIInMsj9TzROCkhHT3wpVA0NNJ1PkZe9L6BaaMAiAhUzDliYPbPR7pZw1FwxHQyAtQaGLSz7%2FaKSxEmha2QyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6xNP1YMWWwCL39CfKtwDrLVDzp1I2K9ePiYq%2FSGE8729WWRtWONNRsrJpk3TA8M8T6jLTfe0%2Bs10cbEG8nBGp8nXtrw54gdszAFz0A1k2rD59WtOSZNm%2Bw0Ro3JBX3Wf1kLTyogJBX0%2BzlSQQWwmKg47Z70polscsVqMH6AWAYm1KUiqQ5RHvrX7Ms2Uxd7qms%2FcW06SgCIHypcmA%2Bun%2Fib5QGreNsXhnxKU3bOarvloP4br8RIek8eYnxziAi7vYLCDZYEM7dYijRCpOeXuQu5MWY%2Fdme7g9XNXKMW0yDM4CCEs1yEjuqJGiVCj%2FzcmicK%2BaKhskxkj64UdtlLZ9HvTQvzHK7%2F92O2Ri6mT4M8wCxMhaNaYVPMnNsOgcbG%2BdqreW68eyLk3ri%2FH9KCluZHGaxmn1e67bLu3isENYspPK%2Bbv%2Bn0YHD%2FwXxb%2FfPXf00snSc3WG7rR2jZ1K%2FiPAHgPBW3gthZcIyQT4KyAdlTFry0f6c05PE76dzYjqYOVCBJ6zyH2Lr7QpWrhZ1lTCoF2Vfn04gr8mA3zV55cbVe5urt78zf8ZbpdCdKO2%2BjC5z5Zip%2FdknNYB01EKNd8sh%2BoiEyEJumfwn%2FmbVOy6LO1gs096bjNeKKXrfl7%2BH3KuBLzZ8hFdOpK%2FWowwt6avQY6pgFLKsI8277CVPsAdQDzZu8Zq5qNUmaXGM0AHYtosx9H2GuyqMxfPG6%2BEoarbJLnNqvWdM0%2FRtyjaMDTVxO0BlqoOcyCmTeYtoY5UVMjCun6s8a8Oq5A35VpCxDwLI0KVCj1iGIZWe22ZlgTHk3s0ti3MFEQgj7aIlfLBu1SOep4jp53gBiRQLtLH36pqOjSXvdZXMzRohGWdPAPdWaWubjAGLo4Cq7%2B&X-Amz-Signature=c8b6db3d298b2a8230b5d132e283df7461744d601d731f792c86d0ac06c0be68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
