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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66J6QTW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAnLHckT3Say1tpMydsQL1K5Pn%2B0IEX7TqN3mW6jI1ptAiANVDdKEaFyYzUWWgJs%2FTIiHxvbk7PpUjEhWQ25UAqk7SqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMia7gj4Ns4k2A1SdcKtwDTQIHk7VKRexmShzdlJoW%2FTSROCK%2B1zpIp7wH%2FrDuVmM4YriZZMBI0ABkeJuaSR7Y0fEpDq7iXgTISN2F3GrdDp04YUSf8npBo%2F6vZfeCNERTELNBMa3k4974h%2Bgff32f0vwfHlyDLdc60ScyODqXBjyHrJaeMh0McGnt%2FXqhMBFaFh37HSQ4%2B2XnWIIQbPpfqH89lM9dloCxPF6UKJkc5uG53c86OgEqwv49Kj63%2Fsdy2Dh3kji%2BdbX9%2BgkLyW5gLgD0cMIn0xV0zShXmXyKKSUMBe9aqblm62dROhE017s0MCIC1OwXF8hY2zMs%2Bo8GJY298jdYxbV8e3ZJfk9ULCroA%2Fyd188w9j1jhmSKgrDXCGqsSOgT9YOgvlwtK%2F60cchQVR7iUstgmXfxANVClZA8sAkDggJFGoGBaouN7CMOZHkC6Kfz6wEh9ZPq5OY9Tee0sv2G%2FAhkR5n1mfLL6qjW5Pt6Hb%2BFVkBBlehmLmZj9WGcqnnx%2Fmk9jYHR9L0GctwR%2FMubUfpZ%2BGohTGZoPdRt4rcgqJk67FQOedc6zKBhZKuJPi2lC4SdfixAlhiHr1Qb82Jeq2nbdFobhvtOV46UsbRe1lBpDBZrWUkk1OcNtEdwgBlsgVuU4OUww9jBwQY6pgEivQhP41oKQMpsEowSujLDv5p7gPuHSJkcZyShBNInoFEcwDW8izw7XjTlKSq2LlSHTgqHOqlxk9nN7nftGl1oPNaul1PKHPTgbZmHIL3SNv3tVq5XhJGb5BKKp3ZDBZb%2B0Be4l%2B7XWWiSzwzRuKzudnDNRK1q8OuN5ND2H7flKYaKnjeGWDLe2VA%2FzvLC3Ol4VcScwGesfPWa3KvUAR9ClP52S0OV&X-Amz-Signature=384e6b4a79baad075452caec524714f41dde27e137807b32e2af332bd8affedf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
