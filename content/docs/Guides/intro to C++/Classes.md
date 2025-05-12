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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5ZJM6E%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFHL6UsTzn6yF2zfDjkLgXSwWgwHCewiDjDYBDXwt624AiEAysBuP2lXy%2BDuR5wTkKs6n9JwiRyUONJoJjVqLhOWlkkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH30R%2BEeiR2RXJEPircA5fEf4S5PDEP5yfX84Mo%2BcivuqFSdi3n1PfJW%2Fktcd0QEWotHb1MbgyT47q220BWuy1J3NgEsm%2BgS9MnkjIohPZyZV77VFaBeiZDhQ25MgGQs3TQgTkdyu7USstqaHUEAu3py%2BDIpPiH30%2F%2Bath3fZhzPW6ZkcGn60qruj%2Fi%2BfWIidmtl%2BftCgGfpcIwqPTEN9r2cekKPgXLfbfgxrInrFNWgkXYApiPFxFEj9uoCWAgmx2Jin9TzcpzzctkoegtJtcmUU0%2FYTp3QMio%2F7SicVXcyQkD5gG24jF5ahdUqeGPfJuOO1E139iEFsqGOngYZUhbkr8n3inoBSsVBGSBdf9czyEeF7OAug8Uawb%2Fq5dbtbJVPvrlZtWHKQNFstk15JbJGdNv1xvyCV3HFqg1lTaDlcm5IT4rOfZgDR0SaX%2BQZePucXT6eR%2BPOwo7r0UMdi41cW%2B%2ByDQMQhCBBWc%2BnEDHploIS71lDJPusUSmKpgxKjv3CzNuVBSyhtZOEulXjy3h6QMLmfh8U%2FY6cXAwgRStI%2BCFKasjMIFDek2uS436A%2BV1TlTo9iEXRpu4HIIuwLi7C1%2B3YMuF5gbIxyCA6y%2BvWuxADx8LtxVrKLBNhzD5lmKZsRQW15xCLnjoMJ%2FphsEGOqUBDZDS2lCLDoQ1NkxAJlRPuY51bxdZRTLxc8Y6sJzVmXwIjPZXF5ONdZ9pIkXugZQsgzvmiJpeK5ksrXywXfblKXrAIPemN3CYRBGtE%2Bcb1f9A9pZN%2B7Go3cHNzk2DGbf7mgMrGcBy0ynJtI8WNI6xwdeHN0sXG2%2FS88TyNmXdcOI8mdmQAsqdDt5JSNq6HdtD04OM7iWlmqW0bfQPsnnuN8x%2BmM6e&X-Amz-Signature=156256696f45cbfe6a28ffe280419d41dc5fd9fddae23c0812e68fb7c142940a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
