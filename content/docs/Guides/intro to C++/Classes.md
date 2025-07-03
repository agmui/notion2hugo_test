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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZL7LYZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGEYHvPTAB2JiE4Mtuosgc7072IIZnN4%2FmKyWbkx3jmsAiBpe7OMMSaWB0WPYaHM4CRjZbNI%2FPXFETiYtZHTKMoIRSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMtR%2FBrvls0mar4tZQKtwDz6RdWpAMz2YXn%2F3Es72RWEo814tFv2Z9nxrGWaWEhAF52fRX9Uz9Si%2FjtdFWXdAff%2Bq%2FjuMf3SGoQiMqScVKz9QL0ngSF4s%2F9x7oFqANdZzKlnGyJPwLSiaMHqt4ZbTI%2BIX2HKDtPrLIYOHCUFt0d8fhVC93fMF8xSFsiHIEo9XWIvSAvMjWwRh9jBTi%2BjEmqn7LkaBEn2cVeyGcmfdR%2Bm9ECup97kAFqgp0KB3aztG1hf%2BVF1mxLo%2BzHGcduSQdKThSAKCrcZPUox3Uvhb9ues4hge6He8rLW9sMTA%2Bxn4IsVZyGPwtMseBJxvj4SUEcctf%2B0hmeAuVGZkcn1cC0p4sXLmEcu%2FSaWop%2BmlCUeEvhy7Hh368gUsBmYUejlECRl2hvlgFbC38Q%2BuNYE0BzJI1EpJSumhRrnIqm4ml%2BnshRwQCGZ5LnaRFi86vZBqFT%2BKQgKSc64HNofN%2B%2BxiHTvw9oZfk48xlSAqPyROrvxZw4ymPdQRnqBOdNbHtmL7sua9ShmthmXXZ7RpnFIpmYEaEnOmXAV2LCXP8%2F8j3Y8GxMak2%2FRZqYgNHXyuOvnurF09PTmDFYq8uuQQtTYqS8ORp6Hs%2BcMhBA4uB2Xp0wp3DG1CHFJJcP1redGIw1I6cwwY6pgEba2M5xx%2F5cGKALtu3Dxpn2gEib4OEsHBLwTCY5Ed2M9LwbB%2FmHMos8OWz8HJ4pZLcL1zUTKCBVExgGo%2FDufsjK97cOaLNF4Od%2FlC3M%2BB1eGPzLw3zZSiUkGfIQujxWAcZa90ien3khCVO%2Bejkbwp61maacPXNYhv30h2k2PYG03519irAxkPq3QFfgnX8I3fT0lEaaJziel%2FpgbxN5yR6RvM40yZq&X-Amz-Signature=96da201e6c2f7ad3fe74a14649c92aadbdad5fb2f2d5e331e74a537ba95100f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
