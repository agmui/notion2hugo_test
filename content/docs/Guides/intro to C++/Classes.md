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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGVPI64%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID%2FhRAyRtNxXa1Nt32rj11sRBssbBlwh4C9OF3ncR8pXAiBbdAaZuMbNgidVN8DtnmeuAchgI8bBVMyKuBQdbEFZdCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHU6l4ZR5dnJvdTnvKtwDkTFeVoP4KVWQVg3p1QivJViQ0NJS89zCyZ8vF2sKJrjykd7bl0uFDdxn%2BRe66mc2Ttz9D6IUm9zISBYE8dummgN11WLxjeTAdEgYTP%2BbIbUAgdf8O5PLi%2FurD9tAreV6D%2F5ywSlnIoHi1ELUTPtRCu1dW5WuqPx%2FACBgOZo%2BivbQOju%2Ff3uZHpuaKf1H9txNtC6sKWNpYW%2Fbgm59tZnkRwmqIxjNW4pQR2CROm0Oxy9UCq9dq4soqeRt013KjhOfTrUB%2F2N6TMcmBHgNWOXsmvAbywF1ssJr5%2BLI1Swr82EyX0PPSvRTu64oHq2e7qjQSCXfIr3TOTP06qIeLLV5BVsfpq%2Fs4eMdLptGTKTPuo3hDagN2DvzNuyx62aqVXj0BxlmDPqW3ixxBQFQ2MrhcjzhdAfByfX2uiCpDdjwtckugJ2YtwsWCPtitjgNEKZwe0eC2gvUA4d%2F83d2AW%2Fr7YD1vHhKGLgfx3n4GGaUG2BkN%2FqU5g7wVynvdO2SctXOeKOo6iyCwYqHN0cnOZoTJI9mOpM3ittRSMUvLLYbSGeTOC7%2FLAG4W3%2Bjfu57cp6qbimdQ2D2ThyYNy9gG16R35PPfvbtEFxrqaUvOm3WF5aADc2fVMsWm1xcLlgwz8eNvgY6pgEq52fvbb%2FrM5NNFWRQFzUV7zwAPR9ERPbLKKW9ufk5G9QZFg8CFm%2FbSy7Fk3JRYWRiaFXXCTA0PZiaAKfnXgaLoXBdQ4L%2FbL7xbBzQLjf5FlIqi3EN4vmJR0Euyr4Eh8QR4ZEwVEOZOKni8AF%2BWrx%2FeOxlSi2KpFQG0eAaNd%2FQsXUutZwvaINzGmes3UBEEAHM3W1LPc%2BxQ0UAOB1wvT2BmkQ7%2Fj%2F8&X-Amz-Signature=c6ea3f720545b9e62d687bbf8e6211302d7078f577ee966b996663af25a0c1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
