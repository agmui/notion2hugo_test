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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJV4WV3L%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDGoaztebCKVq8OTiPUPUnz3ISK%2FmSwb1oF9RP1CJrv2AIgBM%2FZfrTz1PlWKIvUxC2EK05uZ2fhPEzTlw9KdDf8i10q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOxA7%2FWdbi2nFznpmCrcA5TfEmmoDW4PXpfVOIiL3r4qdgK423Gn2E1d%2FB%2Fe%2BINeibcvXu5igFB8tzzKm%2BptSAMyMiK5TaxdxSShihiGi9Q3XUIrXUkyyGVhyHHxHLhf8tkNdzT9HbmvyZA%2BhtacTjpHv9S7OZoBcPP4vEiJcE07NhSdCYYxPwaKJpOZRN1dpgxmyS6NrmkpnEZtos9t4LyfW7Sl4U7TIYJxZ1jPq1W2TNZWEmrePIyuQNL0f3AkKdxeMXNGhvpA0TWTIC7huS1JZF9gy6TxkbBLaj3AvZrptrH8elkwWYIGbfAlz%2BjeiWdWO51GC2Zq9b3ohulij1hwZl81k9fPKKHlvhCtmu%2Bshe%2FU1%2FsM1MlOGz9XVMkBrlUlo5SMszZytGAeZO%2BXsuhJK%2FjxUdlLoPeqs2UwJQDifuwkDjhfRqo%2BHEj%2B1ysTzf7AhSeh0fjYhTUjRyM05jjs9DEPjvAtlPwfLVaMVd2eyM7PRLbvPCOyAaPm3fJswyOwBnoA148RJFiO%2F3OMeHe06uISjN2iZeKasr3PgPC7NUcLRGwI2GxHdk0QY8GeQ3EqEridsmS6d4FPcoRBE3MPQeQK%2Bn2Fv4u2PncTB%2BsRDhgc9qIUAIyTsnCJJ1KpLKDXSbvLA0i8pdMUMODcrr4GOqUBkOo2lWogHAdRpWa4OeNukRR%2FFKOPnMo3fzKB5n7b3fvZpR0ymURMivvRgfdjRUTFXY2iMgYyPCvfHRJ33iyupVD%2B3x4ZtWt4DDapT8mzyiJELGpR4BVuealWL87xt6dw8wKwiq6ClITBmo6IBBuysCT8V%2BAxpw5%2FJ2GLsrapawQweNAduIDsFTRvqq7wrtmiExnFKSR%2F1Y2prjDXa1TfFQQk7YUe&X-Amz-Signature=7046457786f7ec617456ce91967f7b62f6b62d912744120dfd1c133872f51ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
