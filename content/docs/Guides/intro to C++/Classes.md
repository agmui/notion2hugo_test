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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LF5US2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCzl4MXzmrp3owKPEz2kzo%2Fk4wulG%2FQ%2BFDtxYiqkG9oAiEA3cp2a%2FX66TscM19eglMuan591LAEPrutXs8zLQC9qWYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBso%2BXWgxl%2B%2FatNnSrcA3g0sICejkFtfZNCBI8GSllDO3%2F48rzoMmcCZPYVjtPaK1re%2B4UVfD63JeO09ULphVZfjZn7PaMNEKlS9nunP5YVHmU%2FxQAKhsn1YiwxsY0UZ3N2hJvEzirZusdQ74O2%2F4qQb%2BWmFLquu0ybKkRYfAtagyKSWNu7oM%2Fms9WVcr2b7jDkzGcfs3XTJJNxGPRiPofgRdf%2BJj%2B57oMlBwlFXxwMC6FDkGyz4Py0bwqvvTmvrYBba82D84gd%2FG5DdlpWv57fL6bbHXp%2F2WgdLt1zSVgrMDzQhM%2FK7MxTND%2Bs7EKj5dYSiczkx9M0R4R%2FNTEDJQbHMupE3ccPbLfb4soKlA3PkG%2FjkbP68LUe8Reoo%2FfJsSPERrtTSoLe6%2Fo2gpe6iJCwKV0zKHG%2FIKDFwMeCW5OHI1OD2ibooLDMNSVQc1zucfvshxit9114gpRwL0rxMCdueSqD4xs9M8jUNY9YT%2FR%2FE0B%2By43iMsDP%2Bfad7llGboCikrhvx2M5sBJ6DEJ05LMm2OljOzkC5NBlnmPSGLhXMe4dK86L8BXD0TGzsSdkVWkJ2o6DiLbBCO4%2BnvhxixYWyDcsLoxClsoVVTRmdgTh537LNsDoKfKqcrD8O2a2%2B0nG6AkozkWdsCDdMI%2BUrsEGOqUBUl6Oj34Aav1E0IqTwZWLMQuVn7u%2FGS85xBSsi0GYdKFcKwgBEH9BTQsO%2F8NuRCt87O%2BSqX9XjUGILKiwSU%2FICRBNWex0Tga9vq26lbBeW60Am%2FNeDmDfs%2FQsgpn%2BgCtmXmoBs9waIpnua%2FvoXZ351ZjSWu4U9ycqxDxUPm1LMFRMRfL8ROGT2C3bNFSjRB5zq0U4lb5o1wUiVzfXyEox9nTFMTBE&X-Amz-Signature=08c30d79c93908cc481001caac4f13d4479ee6170ed03c3ca4a2c88b330a868b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
