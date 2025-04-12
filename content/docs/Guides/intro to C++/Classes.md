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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ZVT3DG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIF82PVOooVB3CIqA3eW9s0hPNXe%2FtjxtCnY0biUf5EfVAiEA7BVzaBBZTrjvNvV6qPSdvhOPPr5IEqi%2Biw8JIusk79kqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1unzgnWx0OXqdAUyrcA6ITIMi22oXHspHNSpsJF4EJ2tTmnVcecyp22D9NouJfiGPwrhalyPMh72vkU98eDL7NqfJePcCuBvKIBJOb5Pv9kkQWiV5t81gbkQzoNmkvBu92LfEbB66ZIrcebW1cv1pAeon1fDQwccFqa12c78MuXv5FULli%2BPhm4RRlXZBjfKb0mmzVy0wt%2FH9P1K4yBLoJZ%2BycBGqhs1oF2Tsa9obbjSyOD%2F0qzeSTchNOHak35Blw1TSKso9Ao12htX1hCAWV6AOvlhcczKHRQqjX3FaMFb6dvh9%2BZyIOZcl2zWxxjFvQQosWjKnVtLg3N0hHc2WvqhFgXd2qptawu%2FnpMv4Drxd3CGXXHoQ5xoCEOtiaNIy7DkzuVrbH%2FWvJJnUB5Sip%2BTqK7OXNvY66FfSct2XA2H8vrS9kIF6cRTR3Muz29OiBJgYf%2FgVWeSW3xKgW%2Bx%2BJ%2BU%2B1hbi5C3URrpOZOGVmFaAKTnd6w7UcGml3F%2B%2FUEJvzkYnYhbi9lkdpvLt3XbvhVuirBOyehh8brV2boriKyyrtVhtiiYBa9VWo9m%2BRzm7%2BuluP%2FeFREDvPTXJgv3qQfuHu2fFyaUY2mIyO0TMJRD1IZxSlOs1qc41CHm9R6kwVuzalXGRliHXSMLHt578GOqUBzyOj31ByyuQNhnNYBvtlyjEwAoODRlJF8UMIZ3kP4gOV%2Fza%2BjwWv8lS%2Bzom1TWrqqBpVeY0wc6XpdBhzlWLZLkuq1iNFuA%2FDpBQUMi9nbZxFtc3JQrOLYduSwF%2FVYRjLhAC%2F2Lc9xottCRyl%2BMCOb93MPhOxyqaOovencz3KCRvLR7kahTFm1IlMRtAdp0JZl9RjDxBtCHThLUJNLjYc58LV08A0&X-Amz-Signature=d4d58e225b95c350918a498c59dcb598cea5c0f8c19fa88ec662d4470bf3b4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
