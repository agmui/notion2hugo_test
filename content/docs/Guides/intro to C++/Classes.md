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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GK5QU7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQD%2FRVTWcKO5KxeFYa8NMN4RSaiFb4bObK5E7qhLURsicQIgHlmdc8zVEh1BDQfVoJ9E2qJvhBODJww6LcvevqOiy5MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc2KJbIm5SpvAHJsCrcA1gfzzCvOjMiSOnYw0XTiDcZcmGQsh8h1fntdYaEtnzVHQYBlOeslRV23BNyLRiZ%2BtWEi9cMRpwZav3WHRNMXcRTIyoqH5wDhN33IWfTfi2vdXXbWfGaJ5NkhY2LcfgDnUy1aH1A9Dtpp7zrOb8udh9krIR0ThDqVq4JMPkd%2FEuqzfnvFa2%2BaGQA4ECgcGfUZMKagYWvBX5Ree6bfEqy0YNTUEZ481ifyUzfUjG24us5ZcAJO1gNtVuOy1Ocr0bGoqY4QTvma8BBVK%2FVUc4zyT65etiiqNCbK%2FF0ROe4agZEa62t8cnf96%2BJdrXg6KlW3XGUCEeWFQkCK7ITRn%2FQ3rJM38%2FpFCk9o4CwginIr%2FaI%2BlgKKgWp2awqQlTjyA1X0WgJBZIqea6YDrb2l69rNwTHIX%2FU4MSfl8pJoyU9s%2Ba%2BUg5GPx862i2JdkuS0jZ2qhsfvPAkreBQU5I0jx4ojZMnVn9zneDk0bb8rbw4kNLTYWUvInUBys5Tr0IUYNompk%2BsZzyE1j5LzZyL0KotAD2kTUpflseE6tlsAbMloLnO27J%2BWEwolUUjIf%2FJ4BDZnT6jvM%2BSbgN3muXZBQfbITJJvZAjD3auHuIMhDbqRQlRmwZH%2FPP6coBmjbXcMJqPv74GOqUBhrb4pQx2heBgimQYaou3ZBjo7c5r0t2vF33xf8KGfHCuXC%2FqDM%2B6JSDBL49Kg8V7yUvy4dJzGMn9W%2FJ9pFD5h1XBV3lSipGdVX8%2BWG6vHiHUnWFig%2FVw3iDpzW1Kt3mG871V0JMeVVGd2T9iwu1ynEHfexM%2Fgz48nqPFm0MQ6H%2FeYYcJpNgrLf%2BCBJfRbqB6SMyU2lQSTBB4zj%2BbIIDPKvFKkGnI&X-Amz-Signature=b9f1876a2700f9ad5964450992a33a35bd51ecb5753af98d6e6d329e5d99d87c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
