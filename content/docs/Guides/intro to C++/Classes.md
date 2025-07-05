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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI5WXMO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwIGvwF905inimAyUZRBfEVqJ9PKcyDOrhEVN4I%2BNeVQIgHaldzSap66QHz8D1uKOZaFlNwWm6XDH6yu%2FlNOi2tuoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDYYtM6QRcl63bsVSSrcA15tXk8rxuYKu9tYCocHiqIYx65Yeys9qHCd%2FMBAd6IsVchdBj6KmK9RqfoTOvemkEcMbmhwUg41p0l91AVdLDLLoy3jh234WYIfu1eE4K%2Ba1XprFb70K2f2eXiZiqFFtFqk%2BrQNA1cKoBqBSX9adkwqXQkqZmabvYtD3yv%2BEU0dIPSbLdZb%2FS2Y5Feomm7t4si9dUBkC64oFhBkfDqYZvWdy7NkwNcoK0ZOdHp7EYczJMH4%2F%2FqIZ%2BabV9hSsoqcmhiDSK0XlMlD1v2cHZfqhpn3bdpfcCXONg102DxQL0XOW6wiyL7u8M834qPYWz21U9ouAj6lT6z1KyiqV3bUhKWVGLeR9aqoqnvwDrs%2BVCeKvAOQu3NsMuRA9S2diL1uVP2SRnToeIg%2By7ywBHMGMPoApe%2BRGMc2A%2FfNV2w0VVt2dZvDUOHNtXrSSEx5UJzlliWPdZY5e2zwXecZi3IhHdnOsp1Yo3LuqM%2FujHTWAza1gg2Taev0JCCXL8kL%2Bfq32icL5oO8VacORTnv%2FzG%2Bm84iHoG7L%2BN887Fz8NNmayvgU%2BGnO0DmCnSKEmOKnzhwa8UM9t9wmOEFB1qJgBn31lQeUFJwUD7cvSur2z8g2HPgTfvGFCpIN05bRr5SMKOso8MGOqUBbvACNGUCPUP5fXuvl5pQ6X7a6Vso3vhni%2B91B%2Bwwh2dZzp%2B3Inh2Qlmv01FaxKxTv5wHz6tD4VGp7fnmV%2F%2FUOpZOFbvX5GmVDzojD0dFuQLpLFnCHtegWK%2FwTqtgOFbu0Jjfrl3uOig0KOevLsuTDdpRNIs3QEzHHkCVlsz%2BNMxqBu22xjIrgh05Jw4EJbrRgyOEx9yJhXY0wKNeT6Vxs13sxM5F&X-Amz-Signature=da97ac3ee6d10ba3b5d8ddde17572d77550c5930e5ef6fb095206bc71dd2211d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
