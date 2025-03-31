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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32Z4BYG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtbBYIfmPCHGXh799Xc6pXygSm8RhieoJtWv9hUK6YzgIhAInKl9yV5bFUSHOo%2FkW9B9i2Y5iGtzQdbi5cn%2B2DAmW7KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkma5mCFZOiFnMaosq3AOeAMLAP7A7BgiFs0NJ7SZFaxg1LVg8eLbcQHEzDBlPfHgQzmrJwOrqpc8q10WgJicOrAZQ4KgETUw8MnP8UeWwt1RHM6CYLNQMPwfsLlweQ76td8C85YWf9QPO2tudeTxaOxiIfyNRH%2BNNRgq4RubawW1OLQTObkSCJKQjGfUa0sxZstJ6PVlUoOVE2japaQgv84ylTyrgxuerlAuyVBBKJHzbSllXD17XhW4D5yQ6BT0F9uW8jMul5k1OO22QVUAhnum3xm5j6LY1uwEF8Fjay%2BVfh%2BDLleE%2F2b11I7MRnwhAGaYzFINbkE24%2Bhj2VuwqBQKTOQ3ONasmZ4ovdKxCTL7n6V8H%2FbIRjWAgfxL1ZZF7svqiR7eckxjhBmZjXfcw7RCi%2BmVhnqgq5M1Q74qinRG3ZfAjorO%2F7V2c7tjovp4alNx2%2FXgsg2Zcue6y4hWh%2B%2FVjHkSGVM4UkPrGlVJkHg9Zh756LCCoqfVsi4BxREeHFEL5%2FdhOTIy2HQh31Js7jiy1uzOCsNrsoEbvEYvDY2QdkPjqRG0OFuj4LrcyXOzlRfzfryv9CQ8MFMzohviyebIMVDhsrH5QKK1kw8HKeCiTw9k99AzE0KeCRt00g8nAfYqf9vTTSYeL6DCYoqq%2FBjqkAec2Tjfa3tpP1nDL4f4BpM%2FiumSzfjWQOsZvSFhJ2YWrQivyq%2BXd1mXWq%2BDjj3KKBXC2GgXPEsDD3MUqkrvpVmkra6WvlYkoBZSv37rhTaVxSHEX%2Bo2ky1f9CAe1z%2FdupMEz7Jlev9TBnSdMxhOtYwmwLzLOQmv%2BjVjLh5vNImbtdLMahXnk6UHJuQafKY90SJN%2BUJOhvVjD5Z14%2Buu%2FUmEY%2FrSO&X-Amz-Signature=26fbc4fa0215591fda3812838656c784c72f814b9bf620c33cb08cff10bb9ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
