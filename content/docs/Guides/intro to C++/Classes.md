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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TD2X2EG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTL2U8dtcUbq0N1OPtMnMXHmoolN6vdmV%2F%2FAznRJFE2AIgQkkxvZx1LVyHxZ0NTihw4oxL8tjTGV07gCo8un%2BiFUMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuGszPydNXaOAVGuircA%2BtXwAj3Jfl2%2FyqfJfqTnV1eodKpZawQaXh3PASNrdY0niJnf86mDshN9tix6XX1KshbUceVE0TKhCCLVXUye4m1RBPQKB0E58yM8pzyTFcZfBzhIfmfRPSRP1aSsIcoYmD6BjubWO2%2BDKmvEl6Bkh14qazXdTkF82ZLGxlkui9w%2FsCqNPGF0bXvi0%2Fr09i5sFeGMf8%2FE7sGb%2Fc%2BO5rSbLubkkQKSQaK8l7L3pjzYcRNI2TKZWgQWN0iaSpiUPUazGq09IlZMcyCpLFwxCh3lDysll6ULyWcM3AWPFaR%2F9fBXH0oQ%2FwjwQLXeJZz6QNfxoaISweAixeLNvbNaT0tdVy4IZWS5XjjcOga3yS89CWOe1MpjRkBbW0hhq%2BN0wJ0g2w7WppHrik2PDb%2Bb9o09G4HF3dItosgBLL4JIEQiIDNJXnEDB72YDZMPZDjqDsk6SJ6ghNgyvca9RvXyyvHBd5IXT9QcaFxeqk5hEgJiDojBktZ2Eqy5%2BXNiTgwHfZZzPuS1ouFesBRkbOXrsbopR1vUxfnH1rn%2BjNvpU1vnri6x%2FZwp3qiL%2Fx4PydBdo8fS4zt89jFHmSzvWqptHpE6kSGLLD6vlqxoic5L6yKAeBfUACj9zaxI8F5ej9PMITN0L4GOqUBqi0OKjttgm3kVnOdB7%2FFw5j4CKdioB%2FqmWE8cMhP1NLanJPXkEm%2B%2FzzGRe8Siy2Jpl%2BhfsXdtaLEqQhrAGkLFZyN6tsHwPR%2BkCcwjb1%2FjJ7CIFg8hbeVRCw31krQGNhzaaPVydQ1H04%2FOTUM0mUWSpDUUe85404cnU0l0iolbXOegaRBb5CTsy0%2Fd1hPyoLXdm59xuJzvphbVKrxJ1wYMBG8IG2Y&X-Amz-Signature=ae7ed1a83fe4c06b80244701962571bc96465411ecea97c7c31c1822530565fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
