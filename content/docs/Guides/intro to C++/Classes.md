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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM2FP2Z%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt1ehUM7h2czX2EyMqCTMQWucRCvPGfdSvb7YqE98NlwIhALOZpO%2BiwmJkMGiyn6GurBXbDMqbpeN1Kz2L153qTjEoKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqDywUP3ZNHeQet0Uq3APP0zHbdj1TCl8nt7uBI%2FLMv6IjunQFvdiRjHmGEn75d2HwKNqmkj0ImnF%2BRHmfxGHyQrmxuYK7PBrCBIfGATvQ7keVDze4OZT2uBJF6sZ06hqS9m%2BZ3pZ88Ytqg66zq1ahyjqSgMjt1Hgr49h1QP%2Fxzr4%2BWe8wKquRufIa1Ql%2BMe5zl%2BLyBCQ1x1g3E2s7qXHKVnuCm57GHJKIXrS%2BACZgM3Z3h2qItg3JWkgrhSrkgm25r0XwBVFMWWS75BWy3ICkZ51JkhPVEa3tTe8Nf5z2se69tSt5moOYbjXiruqNpA7J%2Bhj3wO3Bv6paDtS3vovEaszBa2oMhPmv3MVeEgttYyN2vrovttee%2Flg9SLKjE%2F7YDIrvwPJ4PGn177Dvs8opfN4L7cBW25NY52XEgH5inS%2Fu4r%2FtQLTXZ7eHiWosOV5trLjATspVn55%2F%2B25wL8R0NkoodWsG8zzUmOSn6jVMJWbURnHuKiOB148KyHyVcVM%2BRPFt%2B8aDjRoNUT3tkibdvd6jCStBnSt4c5tnpIUAtTp6ReH3C7FO04NmX3PUZpBCMGeBWupKnUgBmjFkEPUEoCdXYN5uECZ0wbB9UCHud2HC3Tu57OtQRHJqfKaEFNjsMT5Dk5woO8mN4DCS0v3CBjqkAaa5ODklQ00c%2BIzTQjvyiOCyf2NVMhSHnmvYDYHGqX7l0vqUBy0VODa1yRQFiRSvE5c7NljQfW5aSiK%2FTVMvxhoaXiSAD21oswwWaUmMSGYfBbatC8VLrbkQNe2iy9i55C2vtyfuMbP5mFnoy6A01Gpw3V5xgD%2BEo7EtsjWynkJPYsuSuu6%2BnXt2TWE475WAD05K8QF5FnMUbCfRwme6iTwOcFC8&X-Amz-Signature=2a60b109162bf7e1b092c74e95ff52f886e364756287f1dd4bb39d289bd202af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
