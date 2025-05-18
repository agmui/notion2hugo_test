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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672OBRR2M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BmDElCmSgXs8l6V64VIOd5L5AHzVpA7FV7gwTTHpqcgIhAIadv76I26EIIlDiQ%2BOstOD4l%2Foy6tj2kUZXIgK9ePGEKv8DCHwQABoMNjM3NDIzMTgzODA1IgwYnsYt6xF6qRh52IEq3AM%2FkAuOUhAWxgWrGh9iGLA7DBuwiXXs%2Byu6lWP98cxZrDe6LrROeiVwAmKevIbC2BCTLyGI9reiPtYI%2BL6bpIPbBdbQ78R8dMr90tIBRXhjEpnIo%2BZ%2Fqb19jUFl8Qznhtp2GCL2O%2BPKMq5r%2BkzsDoesD6vNDrkHvcwZK8Y8R3ECepRjFyTaWlNuHwfV3zGy%2BO5Z9gEJKbDDNqGmlNrw8oiw7Qk8yK3Csr7qNkX%2Fxnul5%2FzENMi6gc0EKaxTBmryIHCLxqcuujNSIEwvgEapPmP2sqs%2FItWxQIHglIMaN7BDFDYOYxT%2FVi2cfTmeZ66s8vswKoRNrqzVYS570%2FWVAnqNzT4VolMEKy%2BIjFtnGdnDggtT3%2BzWrG19ItdNqhvAvv8mtJck8b7zXu0vDAolSYGeXVRZMXKkwjD2RLEZBHGVYCxvKN2UYFsZCL5O3ls7iaYSKPNLECijfxuldCi7nv0n8kvUpcR6OsfSFfe4KyqTo3TKw7tFJ4obKyTm3nKGjt%2BSDPGZh9nDW4ZFXNrbSuxWd2YLS2IJFJLbmO4o9tMwWjFwgvhnBrzhNpilmNLPavpptIDwvHAxeklYMoXOVgfKTA8oVX8dK4WtUVDD0DDLinEBgUcpahkEMyVcLjDo5qjBBjqkASt14%2FB55rWfCWPQVTATsldvx9g9NXTBnPfcwSEiomalC69TzFQrQcwzfmDtUKjBAo%2BgHqF0WAbpyHJgkds5wRXZ6Wh%2F6r8sXHPwW%2FaRvv3HWScxfXD39Sh0VTefC2lCdP87I2ivmUzsEzQvEuI1MC069MBfMfwBtt%2B0hoqpsWxIld08u%2BB7ylpWEQUCh%2Fdf82TGjiffvauXRpDMrj42Lcq%2B3Upl&X-Amz-Signature=fa9d12fb711fb0fd03c751624957806a8ad4d358b09a294b71718b9ebd175ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
