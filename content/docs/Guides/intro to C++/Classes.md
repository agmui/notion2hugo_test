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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5QV4G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDmMPlwGZrInV311tGX9Bvk7YbTaGI2JQso0cJeN4544QIhAP91uvFzw1ETr2plbHn%2B%2F0S7o50mmInMm0JsyaWUh97FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMjRJpAqbTyv%2Bhn5Yq3AM6DlRybQysrYGB%2FYzAuhIJo7EYZlaFTfpkWIElUHm%2FpczR0ryfAGPrfsWhY5gytwRHR7PhTAcp%2FI74iAl3VgW%2F5CbP360QrN2PNZ8pZ0vq%2BWYyvjwoWKpLIzeBf03oKRcuC6zZ98893%2F6GUc4fn0pUQD6TGvhh59waGotwB2BICnHPSVugfglwOLgX%2FOJhBm14jreAI6GUcPS%2BHD%2BJR6Ht3SGYQ%2FNjnH8e94%2FHXYukenz5BWKQsEvZedL9OaPzn1O3W%2BgI8wv%2BBF%2FL4puxyZFDx6yo9q%2Bxyf6Odzl0W%2BIkkD%2BYZxfqctke1%2B1CzSC8mSLbCAU5zcSM5OCIN8ioiBiavySXaX8N%2BgbR4EJRaIS73G%2BdaPx2r1i0oODEmpdmmbno0BzJqKYcWg620azhhaQAcD7aAiDD7TYdb7yzBp0gmZYsLYNpSmOhaS2gkiYl58Jn9fCVrlHwRJaIfgdqIXh%2BoBMQM7%2BgrQy8ps1KHkLFq8UAwR2%2BOaZsuOlaaf1nKb1m3XRR95IqonMBre8WBA%2FPQhZbPLK9vpJp7ePDbUI93GCgN5g8sipo9OLQXv3Rh7Bgs4WX%2FuMvavYiu9vmMgSjX4q%2BRCFh0yaL8f5XVwMdoYI%2FEn4JS6hJTdqegjDXj5zEBjqkAdgm6SEB8Tadi6EH%2BW60mQAtRz6WU8%2Bj2j9b9Zm06donumaYhntmTGSKnsgiR3xbi%2FZ7RxCXbfGcUSYO7skc9lcsIv8iojeTWCxBlZC58YXgvfZCO%2BeHpyDPvok4KL%2FY2XELanwCCdPV6n8v9fF%2F2CYzK8TxpuM8APJk5WiV6ItqrR%2B4Go4MCsc4r4yh9WtWqcdeR8K4MTRLtd0x7zqJyi7hLwz%2B&X-Amz-Signature=05e8a1e1ca0ce9ee6885b5d042ad3044cb1c5ec3dbd3a9d0251d2f8360cb72f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
