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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645P6A6VR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdW%2B3OEo9Iw%2FH41VNjOsmkL1%2F3G7a67yKIGlTN%2FZkvzQIhAJbyQ89cTEJN6ILILN9b%2FQJKRoZ1rZjQG5KCtJLadzYoKv8DCFgQABoMNjM3NDIzMTgzODA1IgxuTTOwYTR2ZRFw%2BfMq3ANtTDwc3wtiQAKtpVvfVUsS58jaCK8sOBv6h0JpV8yA%2FVwJFr3mnV0ai9QBa27JJjeckUQuvFeLC6KllAKnEq5SrxwVDfvO6%2Fw9i2xsQUgl1vUaAsrG%2FbMcxKQ0%2Bef4bcHjCosNoPz5xeZY0LQ3%2FT7gs8Fz3mhVWvMF5aZtRtaRKc7E%2FLpsK9aUf4lBjiUWaY%2BIEDDmM%2BEqCVcv%2FRQsoJok6YNpR7hMgU2ueEORf5RxYdsiGUQThJzQD9Gd%2FuEi9CbV7P4m70D1U33ybCzp2NSZG0QEBJvSv4S2ML4PKId7FsN%2Fytb6AC6QgjlQlF2W9LLzmFcmG%2B7EJsdqJWstILc56DLvEgI5m7EqSNJv%2B89wzommekjLovYN0ygOhem6vLnBLMKmQhO1kz0X58pjHCI1DX%2BQkqztEd%2BhK2xaaatPVUofZj1p6egy7SkSaagcBxnPXfnEoUmEb3abVDJTRe8bqrMcdkZUqZqHQJYY%2B6rFw%2FDlv%2FYC5koh3lG1ZHsBMhZaktO9rERXxXpFBifHi0EzeV7%2F4ZuNcH1ReceXwoHblA5u4O94pMQQzwXjz%2B4dPMe6tKC8DOKt3i%2BPenzzef%2FeNRYXioXnYZ%2FW9oafUX6FBPJ6Ra%2F4RoM2XaXGAzCetdXBBjqkATjHoa%2Fkoki8iWVDxTKCbXuOpJFIJMojw5QzznW1y1i%2B%2F8DOTf0Wys1IjGzROi96nv4mBquBx%2FGY2D64rQQfqH15kHxaGqlyRlTqMCoi2g7Kkywpq2WsbKHVGYFc%2Byl57HFRlbryojKP1PqHNxsRydYZhkbDfuECIAtUC%2FVVcECSx2SsWiTxTVjz8UF%2F9UHKKubg1GQqMazPYW5IyvOnhhqcnqJD&X-Amz-Signature=2e87b4d0ec538481fc80a0ec9203a92d9a391ac604ca2b6683b2321b3a4026d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
