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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQPKZ5Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC3PYdVHSQbq2548BZIB7LYXrlpEvbuSZNkyOcPnKX1AIgdF0iltKhuyxS7HZzh8SLen1RuC%2Ba%2FJn9h6oWx82O5HUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMQHpJU45IDYOq6OQSrcA0%2B1QVPJFzm4imJPdF1NcmTNwDWJTldo8NsCxyuxEnDmkruFdhONvXYrRFnZ2l%2B5drHAgIZze7gXWSsjbc0k6E7f5CVIdibZldk4btXNFXHhmS7DfNaMP0b1weGWhXuskH%2B2XgT4%2Bm3rwAytA4Dnxn5rsPlzgZ5CBcsJdZuizL9vVsskWfgyQS1B%2BVpX%2BopNwT1eLcoMsm0%2BygGhFjTv5wE1joFZ72%2BNsG9zfGnDwxFAwUxuN%2BgfsTpaKyUyKBdwLDDHBGDOHCmFoRuv7%2BLhplGZTtPRg3QSuSz7LF6YFzsRv1dF1VypXEVu%2BQPx0ezvahNJdxi5AaDG8MDAOZ%2BEOFkIONLaLVzT7hIsSQqADJfOw5CydzSxT76BQp%2BM2372Ro8h0merfHipfJBBTHRrF5dhTfoANoVzO7hf90dzVdDnndDfV%2F%2FSVSbvsnes280uYC5%2BU6IQqU156blC8nJxVfnMK62nDWkvwfYQ%2BNFmE%2FbU1gSUn9ikja8gZtv4CEzReb%2FYuWO0CEPMT9THc32FdX1tv2cHVA7Zh7K6UZbGFQNhqy%2Fe0i6TwdaBh%2FceSifUfwOFSNANGF9W9qpCaiamxDC2t0z8J5RO3F2rdYzkAxSR9N7TIGbmeGd0NCdOML%2FAjsIGOqUB07iIOY%2FHl0q2vfeh0Iyv58GDTsPqMVlpyFU%2B8uoONdSdNOdAcGJQBNNo2cuj%2Bq629dCGEU3tnRhV%2BkF0IzEedCkJh4N5nC5ElA4Two4kVELgIgXFCF1uRLfPFzUDJFmGQUeT6SkKwXWGpbGiPGhmQ45sfzvhNGcykcDoYXrH9m4Go3pbciM55t9S%2Fc8NEDaqZLEIG78hGERfEbCfiUVFDfHAZ5Xq&X-Amz-Signature=714d2543d4f535c322ca5231e2f26508ecf645dce03efc4f1d94a8d08b712bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
