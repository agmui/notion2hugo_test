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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ46Z4HA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQaG4aXLbzH1kRFnVTtyvjkYucI6pSBf4g7ABlNfua9AIhANHMQl0q76nWKW5MSLiOagUg3Xw8geJhZUH8vqxu%2FvOOKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YiN037Ukg4ZwVNwq3ANYd5JdjyW5VX8hmTb%2Fp1aG4Peotb4kDw2Y7JAUaXCy46qCtsrk27hSs29DQx%2FkzseJLvmRm5hATtadFn7p550IQXjVQVvXNXucaWB4QXp054bScQzOGFM0iArABSPAwplpv8EjbGBdXSQxPOBImGr%2FyDg%2FXI5zzEb2t8Rt6QVGjBrbUzp5yi04r3EnZard2VmcjnpqNAmzibDHGlkfMBoxw%2BxNmc26d2JZ4pQhG5Ju0G1DQ0Py2GrdWkxoT%2FpHsyoc5xyHFDzqthLX6NMcdgD1KQRCh1DdIFFx13XD9xfXNZHpgg%2FizUanO%2BWhp0ePOj48%2BH%2BkoNNaSGkqgkSXOZKH3z40zvu6WV%2BCNF%2B8%2FbYXXX6%2BnNCqjmXwfqir054EJ%2FKH84MszqkkCHg3izuQGaWXbbvNTH1lC1Xkx3FxXKZUVBT4DWLsqs0QI0%2Fygs2O%2FjccTEXnrKD4Pkgs1vGZBJxm3A03zVoIBnZdgkEP%2B3C8%2B1ZeIeEXXfG5wWiWVvShznz7XJP%2BBdrHpO86wm%2Bc9Yj09apvdraHB7BV2ojQlmgT%2FljsmW%2BEsXbEiXXTOQQLzf71kVRn%2FgJ1eCSNGH85xdbrZ0pIdY8q0S%2Fqel0%2FarHIp2ZIfjdpZq7LJSG9wzC20avBBjqkAbJeVnCOVP%2FyDpurD53%2B%2B9myOUGV04tucLvkgW6ViwC9evsIGRe6o%2F6cIzr6YLcszQVgUjAomLnu%2FJdzoqNuhrHYWOkzsfV9VBdDjiAcJOKnaAuSo%2B8tm04wgeTlv3sEnEP6rjw1x7CaknLg2Nakxik2ly8J7lGxLlr6x4c8Vwnj75kVLZnVhlwN8%2BogCtxiN7Kxi4kUUGWIcX9TPt9SKdVQHsOo&X-Amz-Signature=1aa3447fa996eeae55778a414381eae2c19bd44707a39e20b6e01a4c22e68af1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
