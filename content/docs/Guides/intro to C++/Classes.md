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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2FZLSM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7pPS7BKabvi8flJJx9jSa1rDyNdjeuPTrtYugJ4mMUgIgUHE6EFXVHj68wNJepy5eC2ogMgYsra1PYqa2dg5%2FUYgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOd4f0VuvUA%2BZkMSPCrcA2HmGsd2rCizw40%2BfKtDhUppLjrLScLrXRLjxhbtledvoIGWz46sXKokVFL8GXXO1WFc0aaJSyi%2Bi4zsb5qAAkyvTUU%2Bu5DcgKML4XfyfqebcIv2TFZxC5LTjC6WRk8rSMg0QKk29iHnxkvkl5C3D0oENj1hfbsQvAqgd0YKPVsRdl21N%2BcipfVf%2B7TUaU98b6HFNBfvgQDl3Glsmb1pGUoO6%2Bxx%2BR2%2FwTQwVSrBa6WCwRPUgYJjRoEs5pd4U50%2FbSj%2FrRqIMxFOXI0sq0u0rrdHMYI74ykd8Gz1pyW41UWprGQpV2yTjS4Su20NV4K%2BxfTbwEpdG%2BdHLvI5hw%2B9pkXLRS3bUqL655p%2BSd7HGCeetUb9QVnHXmn2hBXtvaJBJKkk0QG4iwVM2vWTRi70jin2Ev8LcEk8QNKvMDD25rmBJDOikhGG%2FcsPpnXF76C2UeQEih8iA8%2F9zZ7%2B1sS7UuqRe1g80H3%2BT%2BV8BKUtV8MPmlmcw%2BBrOMK8zEvVkPahhTuffh9MjksdPgSeMx21P7KmqQhnbRBTpBfbJmwCN8JC6eqSOiR6n%2BAwE%2BjB73rB3hUHCohm0N4RgNdl4qCwhPMcI7nEFEv86hNQR1f4%2BwgaztDd6KpRZPspEvjIMIW%2FwMAGOqUBQgfUzoBE6uEstr7520WdDinoZIU0o3Kf7Pn2b8OsiQSYiLMtZfZp5k0N8LCfVSRvj63VeX%2BiL%2BcBqhDGAWn6%2BiyvGGSufcMbOHe70%2B9KsK75ibh99pG7KY5MF7GJ3KDe41LMk%2B1inPsFwUBUHPtenDd1MttbLhzaCqrOhxVRilEFupKNmSyrEgtXTc8nCuEZfv28OjcINDdhm2XusVNyv39Ixjnr&X-Amz-Signature=b82cdc9cab3a4b73f9fb4735174065f7dec6238b62c0634c5e16068d6a0de44c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
