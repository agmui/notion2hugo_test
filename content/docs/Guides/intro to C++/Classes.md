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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JWENCU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM1dRrWEw1HJGM1if4Y2f2%2FUjZ1TJHSU06nEPdmno%2FyAiBcvSWhl0wtQdSHbyKk7JrASLIxIP48jA4bEymZbJX07yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAgCcdVqflzn%2B7DJjKtwD59yNll8jxbJncqQ66z1uTCAuew5hk9axeUSkkDvJTouC4K4uEheA5nEIfBA72K9QXyFlYzj%2FBF9qTv2M%2Bs71Zk0rq1kFpKKIQndFDjeAbdS8QCyuUVz5%2BP0MIF%2F1njCVhXX4xcRbYdVFEAYBTsUSkIMX7QsYhPBhkEcFmd7co5i%2F7mHFXMzie7fmJ4BbUix5pmpyMsbCGypHQbHae9HXwoyRrf82oJs%2FHEDFT0ZJdNlNpSljuKFk9DZDcYhOp1kgp89otig33hN24Xk7jKePcPQCgVk0fFqrUBia7NwnbD0D5v%2F0JxC3S%2FNjZNSYyKd2wuQkYg6jc9TZQ3EYWFsWetP9xaBkP3NG7N7dy7V4PschqcKjeVF%2FHYYZGOOu9LDsOlnVXPSRp4bJj08fWERWr%2BLbQL8guv%2FBdA7GMhojrVGD81xinA6nDsZfc2Xu%2BxN8%2ByhmXpd50lXsyIGRPei2w0FgU4EFfALU9DWR9vGqnKCW8hvPKNgEgKlbHk0xBg%2BLUQLGqGe4WD1obV3JlEWA04zr1jL4vKL0QMxxLKJPVbF3BTkg%2BLgrPYYRKGnftJoAtaEdnsss9zoQzYAjXm18yKgUIj933oDLgup0Cpmxs%2FyE7OvYO8EQ5EA6fI0wutmmvQY6pgHmbyPUrxaDVi4yz0Fq4rFbrgIv%2BY7516mzkSR7%2FVPmsoCSRU%2B4ayK0Z2aY%2F6ndApQ1U5UruR7LFmFuMUqUHzceyFmfxatD2wnlqiwQRgWl1meHE0oFaY7Rzk9lvwG4uRP74NbCA08U8sULuWPW6%2Fud2EheTuHxGs1z%2F5Q0CfGlsvhyXZw36YigLCrRVJuGujwFPN8%2B4whYzrTICPE7jnUi2HEVMsnT&X-Amz-Signature=324a75c6663440181c84d8e186f81e409b236ef58443825786a9d24efbfce11b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
