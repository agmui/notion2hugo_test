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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOX2F4YB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7darpjcnPn46Fidx6hecI9xzw58CgyOZITDA%2BMHSBlQIgZ5PlgCZWqje3DT68IA1InISTXhXj%2B0n%2F4edkB9ZvA%2B4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb3HyKBYrnBbzxAtSrcA%2F7czGVtFEeaqS%2FvqBkAID2DScYfDlD%2BK8JkpHrkEeKAP1vYqYpF6d5IGL%2FCyp1XpeQ%2BWgQ%2FvB78pmaBtQ6NDEBrP6%2FuRZY1L5FQ4F6yi93Zj9VfileAsXxDwniiWbPzVzHzl7Pcm%2BF%2Fdc61PtxJzcv%2BtIf1ygqdMQ7NK13RwvQS3mzX%2BMst9DtDpia4o7qZ%2FBVGW10k39%2BoOcoWlH44COCDrDXrwCnKWqkdY0mcNYqaK189BcqVLHkHHkwNk%2BvSn2q%2FcJFFpgTjKvQfir%2FLa95lGX2%2FT1XBXwRnGef%2FCt1bAnMsMTLfi%2F%2Fw7BWX9tjp1iobhbJj10jOTP9imv3%2FoWzCp5uch7cRatNVFATL%2F5b89yr74TU8dwWRv1vw4B6tG%2BuTFq1krMn7ij1WDsWuf1ITxbYIsi00OGzHqXFVLQrS4KenRJSrJG8N%2F%2BioNm2wAVu4UPFF1npTAqSx%2FyB5TnpXMHkTiu80BZnMCgD0zbY74TvllSpes6lB7VUf42WhfNnA37JJY7DuVrG0Srst7p9zl7g3dJ0c26YN2eHihXwAxA%2FwHF0Y%2F4%2BJ81BGFq4LjuQTWIBUPxeSuus3B1iEOfW%2BMobO5%2F0GKYoXMfVFzPEK27xDpDrIbWOZbI16MMH55r0GOqUB1nANLx7nSY2uNOrkzKanJ7h5mOFNC977CRsukBw23mKkftR6VUdp%2B3SLSJQknJlSLaLWlZTHtiIRMJkIYtPQifMWmHOoL5WxFeHav%2B2Tzm5GHmCSz%2Fbm2FbNQpPfoOKXP3%2F4owlB02jas7XAkONtPc87HvZxJqgOaLB%2F498QZmfS9%2BABJSjlAGZcqmP%2F9AX1LPKxP%2BUMuT2vBz%2FCiLyaRXXkUBzz&X-Amz-Signature=549f6ca10a4216868906bc7bd7a7a21313babd31fa22ec44f3fa9126baeb19ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
