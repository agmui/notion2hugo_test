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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTRHIUJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXNf44PWrt8mG7HnWigfgdj%2BDrGjpr1xRrM%2Fus7PvR8gIgE8iIeyT0evgO00NREfFpHvNoeVTK30u7Mxs5k1sZGCsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEyI%2BccndqddRsDOyrcA1rkCf%2Bx4sjqjRpH5w6AG0mIZQcfYv00IHwMqKHlpZ8DwGdn7jXGBhXNDGp31fMT2suDpzdrctNjVKZYeXhy2I5XTJNw3vBECqocJNkiI4X8yebVAlNOgLmbd1hkg%2BQpEi8O9Sl0z%2BVaOLqXlPjtvMXFX%2FgSqB4vJDOFbl5O6d7Ar%2FRrQYIT0ESNC%2BoUB3uRJAgiiWg%2BH6E9rh5tqtsgRCfKwVbsQGlI%2FOqSgSZHzWeF%2BK6xIwY94ZcUq%2F9T70jkiLpvxzJy1qrTrMepM3fNop1Swkon1KmxpE0dTrKjSkqX3V1HN4%2BaZWpu2bH9w6pDc5Qu4QhrEC62Kap1UDIlbSo5KpCQ91zwAzkkWoKVoOicUVnxcPMEif8xn4vtmxxmAcSxQ8yh5acXYEuuwUMmbX5h%2FTg80WV1w%2B7zzOI%2BuhN0xYW6wrCvzngWRkIyPUp%2BdMpIKMrLwsDlekFGF3Bvv0q4uSgCWlrAhtwlsO%2BpHvn3mcQww4Lte5jvx5h4Asvo0%2Fsur8KeQbfbg6q%2BRY%2Fm7ap4lLxqtcX9ELRxmk0HDByXu5YrLYKvb%2BMbUeUp4T8%2BIIvyZLJl1Gl9FrhJaeq4oTer5A%2BwJN4%2BTpyY6AQsAO9G7FGw2gubIiQzpPkDMPDc5cEGOqUBpcnW%2FjDU2dnasQuoXlfAtif0C%2FjqnRKSBHTMv3mYPZrbzPTIs7UE7F0gXHg%2FZgjKNrH09aIPiFWAvvX0sdsNSlMlkPFfdJ4IvqBPR3SeT%2B5ruPGPmqOeDACQN1MubxfGAM8NjJisWJ8BYY3XVMlGDVCQf96MLMA7K8%2FOtCzfGqtVJxW4FqlfAtwAxmSgimOwiTShhvyXmSlWGABKtYeuVtCTZbvu&X-Amz-Signature=c8d08efdbf2b382979d9aa177708296d4bd2c8e1e6daf09a60ab552c89a0841f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
