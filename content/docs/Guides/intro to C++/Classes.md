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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLXSL634%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOAnlerYydxYWd3AMjxOjirq3A%2B0%2FE1YwBW3t0%2FHzKVAiEAlqIUbRcnF5irxYgQHZq2vUOAIbDhfbtCGp%2FEfwNyf64q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDK0dCzLyxAqU59yigCrcA4nVocHY9F%2FI4X7MDjw%2FKXOwoIpLBP1kLwGabF735VBFJL6DYFSqkCDPcGlj0MEWLi5o7%2BaBgzae%2FqrQsDdqp3HWSeO7QPU%2F04xa2kP8fBRiLjiXOWBcNjm0Tf1tWNzPgos%2Bu38H1gY6yEvsD9jzzfAIywWsOpQ02Q4yIiogiyI2RK4mkL%2B8vjBVA2%2Fcy4tFHrAnRd4oZbCmCcPbIbtlE3v9znK%2F8RTP0J36tRG8F2Qv5KLbVQSbEwZIfmmLZXveV24tdzg8cW5bRFTFwtm2h1TreZqreeSMGTgyUashX366c%2FsexfJQyE0jYhrL6qziTqvmWlCmgYRnNFlLJ9wRp6CcNQACqBvKyJOvTy4Pp5Nl3D6nmGKLxMn%2FKPfst%2FabcB4bPQYWq6Rlp6bPhlZm1LDnsDJVBCNLn7ip6rcGBsEH4fjzrDufveiZrfkcQxFQDn%2FIOHuzLtUPs77vUu6YQLeKVJjjRxT76J3e5scrdKp92mI8vsFfBX0SDcuC%2F5XbC3%2B2oQzeopL5zglJDBzb%2FGOQ9eIgTNc8iWJOqiVZ74n3ILqwv1ZaUvEA7Z3xFNWlYvCxfy48I2fQpmwz%2BjqBPNi1sU3wVPRlTD8wY0mD7QnkMsjUQUJA1SfkaI%2FuMJvY2r4GOqUBiW82AO9unOj%2BPZBE4dc8b1LMYh5Sy51FijSAxg%2FoflEMHQWASdr9vgDLu4JxqfZRWnWPM5gVzsyN%2FBXKzH0l4FDEMhZ527vVMzQZnbxekLzKqkgFWcdM34oaCnf90Wq0%2F2UIA1ba6BC3%2FIlQyD9%2BUSqLrJMJVFJ6U67ayxZDALYoISJsPcqR8JkVnaGA%2F54Gceg5xpjak1ndZIA54k7sQQEsopDi&X-Amz-Signature=a845314a74a456141bc0027bcce849d2f2c99b67ef8d52a2426b1e859683b865&X-Amz-SignedHeaders=host&x-id=GetObject)

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
