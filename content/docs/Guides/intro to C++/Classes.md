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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6I54R2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCR%2FVzPGzZGqj7ZnUL4iGjpHNQZuKXDB2EY9dOAgVdp4QIgKS7iS6sXzrt4ATmoy7mkBAILzEn%2BwUSOXL%2FMNlSl4DYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAdJdqIqe81xMK8WDyrcAzPJhQ0%2FENDkxBUAXNt1sfa2FZj6h%2BIgH4jvT3uD8C9WzgHJ9xr70b5D0HXSe8NVfWDvUKc7SONX88ep%2BMnEFv1HhPc7GfFcC%2BwRMcd%2FpAP9lmqrfIEhbFPu5HDHq9ah0eomeEf0MV7YLKJFnFgtEvbaCRXElBoYNcKK3VWxB1vjvpOtcr8RMwDzOVGIjcr1NeQp9DhPG%2F0AOgP9%2F9YbMCMEOxfbJxVvyoZBHlV3ANndDGpVwAW30RQCofrt%2BRO%2FcmYAL4uFczfUOJj%2BQn9iH8B0YXBNCiovIdKGPZ%2FzS9cUbmYW161%2B4wPoAMCSdKhft%2BgbpFN7JLP2EgucF1y7tKVYCJ9lwg%2BXvUGUqCtmg21VlYwEIx%2BiV1ufwiIKC31ghWrsL%2B6OQt8XgUBVH4XKFa8%2FZQ2pETDu2mDnc9DCxCOgKFoksg4mO0NJOQCPKvn1G%2Bhn60syKSgSbdqXImDRO1IMnbrZ5uv6v7w3sLvm5IYDMDwvqH2KeqRALiMTDdDpIgXFpOCUNakGWyBhu%2B2NWWFlUW%2FlWqy1mn39JEr1iUBr%2FI8B3YAhOObXiH7hCSs9fqqJHrKBPIEfWRmZpYvqpPA10pK5KMnUgFogIVLFZR7y2A3dBuds0SDeB05oMO2uusIGOqUBiXmMpOq5mR5rt5iFD62G9ej%2FPq21l9r37g008uvbShebqg%2B0p9vAFxwDERaqpK%2FbTglhVJDGcrd2y4zd9nb2R2YlGrAKR%2FNIp2QztWv8UtoLeoUgJm%2BoXFUny4ffbvTtMypVW8Yqu27ux3HC5fxmtMLrOqSLb5o%2BPvi6oap0Bj1ETDMpU1mHSRDvYPaZYL0z4Wgr83MrKGELQREakQyBUs%2BlL8w4&X-Amz-Signature=52e5fdb55619253724be716f504b3a16db9a20a0042dad81761cef9a52b2da47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
