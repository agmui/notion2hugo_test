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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZWV6IL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZcceiYgVaiHkKv7F1xeO2cSaiS38WhYexIS7o7gfqlgIhAM9f0fyX%2BTQu90gMXMpUTXzRLys%2FTmgKyTA69%2BjA%2FRBJKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZbVZOrQPw7%2BZ9XuAq3ANh0JAJ6WmBTDKmyCMvyf%2BmU%2BvkOrRSwYU8UllLfQse%2BMF5iZeQmYFnWrvLOLaJroeLLLS2Cg1fBHC6dQ1ZzX%2F%2BgqJHISaVohHYTtd4ZETtGIRbDiNux%2Bb9j5pgBBJb0xXPXQRfaBUWkD%2BoDf8x0e1gNqB%2BRE2yxSUFjzXlCMsFRLKzeCxs04qL99KqSqBmuV7v3mQm0vFcUIPekwdJ4NtDR0y8PyMHuJm50aMA%2FDMMexWIdZiQbZ6qeV8NjNqBopZJ%2FslHnHzTu%2BP2bYbJ%2Blc2QBDrgTxm004x6sEmLMLjBIK0kF0D2DZuzjNoktosZpr7AEhBZP9s1rQmnfsHRygMV3gYClMHrCyoJJHCeYagkV1%2FRMDg1O0CKtkmgz6Cp9R%2BGSj0JXQAKga7kADr3RXcfIzeMdHJcndzuvQFlXi3Q3Umylz4LOccX4zr%2B9UFLscKFFKBmLQYtI6UZP%2FuCRoD4R6hMQe2Ue2fLPhVHQnHf1qKy%2F56C8KFn6nDgSJQui9A6dETYg2Uwy9hCcMLxBUZDGKKQ9F9vO78mvtHMOQDvOBaqR%2B1v9AO4%2Bhxb7rHyg8T%2B8Xgdr%2Fwhp32nEg2lOzQHKPc6ZOGuuhBlnUPNAyp7P7wSek5oUFdPpcFOzCrlbDBBjqkAX18dyH0NBlh%2BW3Ihcx0m2fdiJ%2B8vr5Ac0FWsB2JYpNQe3VviAwANN3Bl%2Fb%2FcZOVhsF4ZoCfnSkO5oHKj8iV0o5aOSvuEEsIp0oucdAxLtmuFUTu92d7UgalLc%2BOSOJ7f85DEn3mQio3YzXDELN9f%2FDmIzbGxpd3QRQnGcCa2bRR7Tcs1d5Z9sst1Nqn0Ibv36%2F77SYgrZNRb7ejDvs0hM%2FKCKIx&X-Amz-Signature=3b8474efcaaf1c706250a3d5bbc86181ef345b3374065d43f38ad6522f09a3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
