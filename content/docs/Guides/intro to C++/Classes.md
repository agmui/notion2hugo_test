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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPMGJ7R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIArjA8C6HSaT7huutCcYoORR1Wk3f%2Bbv2YX3SLBpKFpmAiEAucJX72HUJm3JaHUr1K2OcRN1dVQaly9oLlJKCDI82hMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJxZ3WvaNWDjOpb0JSrcA9iLEjTbGgHVAxyIObnmoy1sD80WXBY0FtkmgUUxT0aHUXdlVrtWXyPIo%2BsNk3saA0Ckp%2FtUo9QNcuG24vM8kObCoK6c2VqIWMny5XkZrDCpkj0mHR%2BNQQ2DDnyE1jV3nYS9U7DrU53mZOin8cTB5tNHGvQ1az7Y6dFoKDg73nyxD3iusN8vtl9SOXNJilkkEdou%2F3capg0wKa5MdMvakAoAYDvpjLn2YlQgtpIVzVHJAkynRU4kP3BPJuGnc6RishK54tdyOuxzgNclrV4Q%2FJZa0dunuPyhlKwvLuGD9rz%2F9yTIOy%2F2DKm08geAWo2TU%2FlBxYBPhaCztLGj%2FTHfkklkt%2BeEXp9yIeR5yOnpuqhIzlwBg0pruPpJ%2BjK9b58Vm%2F0QddqqPqgPZNmaSHtEn0VvrBXcMrslozgiHOidxrWR0xt1TW2BqDGt3fa4vngkfb2eP4jaw662cr4yfkZzIOioO6El8tUXFP6cWVJmHSGZiGlETwMRjjdJipYkWEx5kMKQO7%2B7KtanahYH1gGAlUZs02aR5asNh%2FhtV4001QDCKlvsGItfjHpAonR0fv48h%2Fej48HmRDvHp1i4fqq%2F6MBWNetCE8iVx3J1IEDJkioMvPwxjavX9tY4I6k8MNvW58IGOqUBipCladAv8f6tl7kM7ua8aDSg%2FkeRBZuqaO8dB7BWQM7MaJlk5vFTdujGL%2FJqghpFtpNRjhOY9PyVJb3f22kHiijofu%2FNFDLgqPHmbh%2BIn65PQMVWEo5YCdTtYwiUm14ZLhadE8TbImtXbg30SJ4gAYV8xB878e7oFfYKEClmP2%2Fe0kiE0EVArCwNhI2qvmVgNNbxhPNkbjoNzhRLXfYZZaBhrTWX&X-Amz-Signature=66f5a9e4cc68d1d16fda4e7aad703cb608980c0182bce8b757fd7373cb992963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
