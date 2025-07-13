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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TL3CHKF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq%2FJxWAb7EMe7MJCSty0CR5IUB5STmQCVjYbHVIpksiQIhAPEnZ0P16W4EYQyXUu8O4ql3POA05opYwjmsvF%2FzPwYsKv8DCBAQABoMNjM3NDIzMTgzODA1IgyKW9rdi06U8VN%2BOs0q3AO82XeM2ido6QObM7ZDkleQ9OCW3JIRm8HORL4C8guZnBE%2FJ92DNyrinh%2F05UC9mjx3EDMj%2BQ3j7agLxgY6yNvUQ%2BMK0byFKXfaOaUFt%2BwrSctsBUrsiMNTZ4bu8dCGgVnt9h82QxiwAUAKs8RQ6SdZuwB7s8ps2YFEiBDrJr%2FYTYFPB5pINKIWWbrudw7rcafqKFHcFLOO%2BDJ%2BRTy4QuyOWbMoR17V4Du%2FobYWCqAXb%2B9GyXlYIpH5UhqeJTDQuiCRV8U8r61dCekyv2iWBeTZSmB4wa7CGtT3%2Fmcr38JSDH56kIuoMsAoxLK9Mn02CH%2BcxehQC5zHPz58IgkFc0aBs9vTcPCtGRs7bg3rD7iIvzzqyEX8qKhBH033Ra88RyAh0q6juhYaZiZVetqXMTDurHUnoqVRDlKxFcpNa3Jvt4d6A5BTXendPPUGNNSdX8y8burTZ5pxqajx6uCMhtRGrcDIOF3%2F8LzclKb%2FIxJ6c1cu5GZQVXXzF3zo904%2FB69D7SWBeVHLm%2BzlKuQtPxYpILaNiLjxiDVX%2B%2F0O9mBzXnhVKmOp6mcQhDRwcPh2sm9omVy99rjBz8IP7GFvtIpiKfG3CVlFSRNum%2Fdw6vxSFZHJxAp6qRqbzBV4vTCqpM3DBjqkATdlOxQn7xamN6%2Bd8uNfcgXvH9NPo5yQPnJabqQecabSxBHINpY04QuZo1vKKeyLQSFzXcM1mCjylP3%2BCAgvGlSi5M4FEVaZGLh2Cs6T9a9VNBAX1GV3VmIhlOn05AGJl9iYkmsa0HEG8IGhHZCTTjNrhh68Qm9QYoC7QzaGErD5qgynDnVZ%2BHcWfotV4uhznBe%2FlFbYZ%2FYZS1zkJbWGFWCkufxM&X-Amz-Signature=b43d2ca3f8d8ca7e84e899847a3d02146fbe4c3d99abd37735a067dd96daddd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
