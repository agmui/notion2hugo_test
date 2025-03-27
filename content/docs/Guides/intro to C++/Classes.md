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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVEE4DC2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa3P96zh6AUcy2823aeKUgR2c%2Fm5VpGi%2BhnVfn1rByxAiAzoStlOkEB3DL%2F7G3rCHtnRVwAiRGNJYBsBm75W1sCZSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMOWP8rrwoXBMXLYYHKtwDtxBRlLGtwYcXWs8CYUOVrW1fB0ytWYtfZGKZVYH8NQ4cD8yLM4pcV%2FXQhrzXChee3ipAUnkMm8BJTXOH5xU953r7fevaRmSfXBLWglhcb9Vayi7wPoryzqUayy%2Frc2mf5qr3%2FGmL2XCVPUxbZXwSb7hZOHg0MR9CV2bG0yzjXAHIA8SHhXyUyoCCiQxisLDF%2Fa6cfxbHKuJGuCJPpKNXVvkRghbEQS3e8KSXkAwJKc0a0Yfy4YL%2BFg8wyvIhi05h%2B63P2eLdvDMRY0tKp3Yx4gzxaKKE2WObJhGxffBXgoA7mj%2Bn78H0frDmuCwUw8AwtWkniT0%2BcaeFt%2F14E0DKsEQK87R2HyOIfCu7Tzbmi2egqAu1BCqON7Rp1jlYRvCmRsJDXH%2BPPs2LM0So8HUCSIX8EpuyER0S382n1WL6Ohg3trH%2BpVWLp8UcFA8HDaJLwzeHwUAVv30wqTGMNtXgWGhG1IdS7erMSekHuya0%2F3SoFgtnTcXHGKt4hcvuzTHEz0nBqmKgWluxeXGPqGJ5RDBFNd5QGTP1edU8sDTnt%2FFxyUnx7n6HyAA%2BgXKVjKhdUwePEybRknA0MmMXg0kr9jznxzN974aHGJ5yxAPFlWLprTHI4NKXsStGYj8w0dyWvwY6pgHwLeqi%2FG1iPSE7kjgzXQnw45KCZui5iu5ocEB32JLHQjTx8rW%2BQf4uvYqhwq0PSwxe8PeQ2jmSmj7X0j81Fo9QvFIlmIlnE%2BNswABtPXKAIyrD5s%2FmaV9jTjr8IIIftuHWfVvBI2mktGbUKPXuqByiet1zEBPxeLTdzD0NirDuabfTrP%2FJtYkCt4B8oVElsROp8NgZM7J%2B%2FMQJYrXV%2BsA1wA%2F6zVHa&X-Amz-Signature=28117cbde84c0d1a820ced1d3d7652ce5f19eb5db1e76474a17cc0989269b611&X-Amz-SignedHeaders=host&x-id=GetObject)

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
