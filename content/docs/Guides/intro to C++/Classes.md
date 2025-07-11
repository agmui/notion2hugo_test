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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXL7T24W%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMAbLwHpeFHXKgECVsjlPTB7qfttbOZojT4MWxmHiLswIhAPQOjZcD26aP1E0GEH9IH5vw9N734y0%2BIq4ixR8iXfmxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF0C798uUnnwEe2xIq3AOCku7TUWO2CPPbkZ5zupvJq0gV6lq0yHAGGu33jpCeTEb%2BXXjW%2B2g3N94gZM8PLf92cJcKWM5ulJkNVO8dgSXSgA4%2B8xFW2A3JVc3zB6czkqoOyKRvz41GBDzVW3QZtt9icVBzCFZFb0glsGjKqhl6lYis7DRfdRm6JUPqOPWzt85n5CKNmQm%2BVOwEcNxqV4WqEL8dctwGIgFW86CPK%2BlL6s568gUAaFxdN2CR7Jr34Es8jCe0eSX3SVM8gxIJLCju3QlHriNAlGAkvPXsMIKwx1kVHT0Dyk3GpBzZ%2BCjanNrmZ2crU4n7k5G9VkcrFO40PdyWCEPmLyXcuOfCX7D5LnMECTZ2MDLE7O95rI3m9i26VcP91EuPQCwXAzxBjAs0XlVX6zDGqQXARAuuoUsSLu169l8rhiPEAWXOEwwuwjDN7BzvaLFjLYAeCVBWMva6Jo2WJQMgB6MaI0vRctLG1xACcO91rpxFWBa5yn9odlWqJWlSySW%2BceiMBePdai2hmmMdUCsDAvaLa7pNY4XH5bE6yyX2ib%2Bfsl7%2BmNxgZsGItioVS4%2F%2FKk%2F3P05G9Ss09%2FuNy3GJogEDBnnvxBBRb4Ce4F0CRR359sruv0b3w0SvmzbN%2FfbXBhP6ZDDrqMTDBjqkAdjjPBM3zXuO70VwBaay32regdcsPyuTnAP9Oz7%2B0DpgZ7SbXeCe%2Bn%2F9kQaum%2FqnDAXni383VAR6etYJYnE2ZcVcbSJ%2B%2FreU8s6gXOt9Bu7nf%2BfwliMAGhLmY7Pdo3cv6RrGUorbVjpG%2BJfpwRSbdhw98EEC3RDfWaP6BppDN6GIrb6YQ6W%2FSGRBmBPkguBZNji8gRBuilqUg%2B2ov2E6SE24XrpR&X-Amz-Signature=325ba4260c8277aadcb71f6e3cac7540fb1c37df069ec879c368ab9738b507fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
