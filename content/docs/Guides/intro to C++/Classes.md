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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG4QEV6Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhyJ4NDRnbQYHC%2FwP6wRqR1N%2FMv%2B4lGV4327hX25WyBAIhAMQdDHZ251hdh98r9VbqJymHkjT7l7W0fhws9yd3Dhn2Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxMQmYUHGivNkWOIloq3AOQpZ4ysi6NEY%2FBuGzc2RkEeTKaGP13th2tQKg7AZm7XFrICsZ6dlsS0DR5%2BFAkN%2BLSfzARU5V2yHynPkZrq7esnhKR17zX5hY7PPM8HGoXcHH4c8BOgOhIchghvMW53%2Ft6WXMvLWM2LjBe2F1qIzdQ3gO5TXTkMEgI27zwDAu9Cuyda2mZkxiNAKCP0l5Ev13kIwoZkBgwmHae3E2ocH9OsZFN2kTzXxM3GoXOZJLq2V1Tr2o78h9SRCxvUQfr97G%2FaT54N4aP67VxWE8JqZ5%2Fn8QYijpj4qfpNFv1F0QXM46qiJ0OFLq2VOLtY%2F4egJ0Rb4w1B5y186MR2DOSqtqwr%2BKO7HDMa4SGIrJkTPIMcRHhAyWp5Cqy8GyqFHGie7zFzxpX61p2r0gjo1bwQGIUqCQmt8HXtEEuJt6yPZlP0X7niOSB7x2lnQrA6wX3tXD6j%2FXYjFbRQbwWItDow8woc7DgZhipPyTf9raxOlD6Gzb5j%2FMo%2B3zEBzLCvWHfZyq1C0%2Fbsf9VecOkt%2FM7A7LxBHfVB8cwPTZqdpJgiTRH8tL1YXLDIlKyW9bMvO8GwMy7vqxTh1l1NrWSzMlfZJIB65baC1oTtbLJcWjCJc%2Ff%2BhtHRE10EGjOyEtupDDjz9LBBjqkAS1xb5jQkdUdB8oLloFEMjD%2Ff5x8xe0Ww0lh91N%2B5r7m%2BIel%2FYplGH6a%2FgJbtbizGUFSYcUCLGLB04BWXJTnli22M%2BMhwzpFSN2oe0y1zCiiw2XCNwdl15YZb7Q5zUyP932QuUqrSJZ9xWbQsa3uUfQB4XTxw1StFAnNyyn5VMlyGLZ%2Bq8QWKqfrDMfMQSQXeK8Q539jlVWnBT6vwODrEmaYUWhy&X-Amz-Signature=282a1db0a232df28d6104c63dca816bb584efec572e55d2982a385fc2beb2dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
