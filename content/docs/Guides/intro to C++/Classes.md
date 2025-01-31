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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5D4PZGU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpQgGPa%2FdZozabvKE0FWGSJBpZQZCyKsDMsaicqqXM4AIgfE8J8FJ2LySKtAK4vuislhbiB9OsGGldGAjPhx%2FRyLsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhUnfJXBkB3nHYqzyrcA29AhSEOqFDLEsO8gJ01M4%2BhfaWC2nZN%2BbfYUnTIrIn4wj%2BVZXPLEhIQGJ4ELVkFDr1vZP2wINSaAPRRnaeik0r4kE5bGnrVEF4zIfCRAzRdncO%2Fko161ZmyaM79CFcF61JwsA%2BLT%2B8PvXJbZPN4arZm%2FgeOq7dsN7xLEL0tivIw7o2eA8YcyidFX%2Fbs96y%2FcZ5N1jw7TScIm%2F0VkLoKX5m%2BVOr%2B%2B2GMmkgM6oWSCD%2BJqDTqClPFSrcxGsqPkQmKtcvIk9VBMeOqxW8MR2TICNywrMTsTxGCJ8%2B7gtWuYpuQ7jJvPhT42vYXP1J9yHnW0LHDbNZGYfRutJWAjVBLsuqvAi22MBk9P5fqXce3GVLwRSV5WmnlvIMiyTqz3NQGNftAJL5W92OjafAjThyNn%2FPcs1jElATAIZpHdww7pSG5Dg3zsoH2LJ35doZMZSErMhl5bc8mNN48U6c5i1OHmZbm3KbHCktvNDfEjdQ7PxuYLVpLn8gXPFQQMyxZpXhjYcyTZVNUcHqG%2FNGfHgcaiwKZw7D9gjk8EKlOm09OdS84LPapsQooVc8xqGo4TOaS5XBD2dgEm%2F16lojWs2evp0O4%2BQa%2FOTVdko4cZYL9kq1Wapv%2Bk35OFDECs3lRMIHS8LwGOqUB%2BIi3cO5x83US6bEqXDxvtjnCkNk%2Boemq%2Br5FopJTc6Mhh430%2FYnklHFBW158abo7wDm3ZSeBxCYZm0Pqlq0agbd2BgBD85DTXzAhE3VWsK1efBGGq7ZYrhZLCE2VR84zGTGvq%2FL%2FrUgGFUSoGa5t9rPoutzA%2BpRxCndvotu8IgnzRwcsT9SbZW2c6zJvUB3XPgtMrUSuZsB1epNce10Oq33mo%2BWR&X-Amz-Signature=bca634361d88018475ad7aa0f19abf6580b7b3b2745472a8a97129ae21846ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
