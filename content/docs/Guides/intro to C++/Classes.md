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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYV3Y76%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoHXHlT%2BBraF08miJp86lmkZ8c264cB1x8546163uZaAiBAspg6K5eDXESH3Hi%2Bp%2BtHg9JIa9kxfKtEOAr4TLQBAyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhc1mqn7nZ0aKe2IKtwDPlky9KMQMVJEm%2F1bryAyQRdDrto5sXckh5LrJNnL24OyO7QL2kWWWCjyxUzycIplyxJBacP4AR4kOHpJpIrrhlnmIZ2lAmQ5JKOPKg0lJeyQrIyhbH9Lug74wRH5uy2GcmueIPHzHXmz4rEbOXdhfTTEltqNeqbFsy1rFXtHG529quWZABJsZJW%2Fg2EM82h2vbVxoq2xEvINcP3CRHGRtjzAPDZpEVB%2F5ToMbypmleW%2BO3OGu0mks7CL76NsIePYzhFDiLqu5nNhEZQ9A2NsXxPCgY%2BmWUOH6LPQnOZNuMjKZOCb%2FuQEjEqdLmcy09OIwPg0iA9AGfA9cOHyljjIYNJncLfm%2FkhIOj36syrXNrvjVdX2926JHN9HUC%2FwVOB%2FYi3Ni0keXg8G8XAaGDYUIWX9KdECZmevYXD0Z0C3agglWqp6LVLOry3Mx23sAkUpJuolCYDmx2AfQFNLdaMxkDm1JXig6U9%2Bwn%2BlJqDGjxMC09G3htDgsft6AcnihSiKKAT9EDqRnKMgzjvadwsR%2FMJf4Ztdq5h69ZyfgSC8MPENRVnxNcUdHqQaVV8QchjHYEjdn87Xd%2Fge7id2Rt2kmz2fsoIm2EqYzaKle2HmZlU5k40tPt%2F8w9OiJJ4w0OPcxAY6pgH9dgMkamqs2xF6w69ecM3xtVJ2NOab4jbtIG62k8v0VwRsBADq6zDzZ5aRlmJbKhaHh%2Bfp8jxQlSNaE%2B%2FqtaiMmn%2FCab%2FN%2FXibyC60voXdBBfYZk4PVkz2lZBZOQeJuht8UG9%2FQUWvlU8JMVvTN%2F9Yk4gvWZvmGt%2FxFQjOPH%2BB24uRlUAgMMTXmtL3ow6Bajj2IhwRWTX0Q%2F%2BWN2XhlGdtVXoq9Gis&X-Amz-Signature=49ed67bea2d920a1c17c7cdb5b2070a6c28dcdc5e01ecd43a029cb0a3387d6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
