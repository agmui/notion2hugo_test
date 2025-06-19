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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HJ3C2PI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsl60%2BVBVta2v6eYixJ29sbDRhNcof%2FM6IvKrc7NWZ4wIgYa5nyp9GDJhFY9JZgAab%2BXj%2FLNQi1fMQLcIQAaVP9DQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPUR0gvot09SPSWYSrcA1fhXKPv31wRTzjlwcOl8LStwMBHHMms%2BjWMNRN%2FK81qaLfpnUc0DJhGT3lq85TUnYFr2DjAMAEpTJCE4glNd21H1I8RO5l1hKrJ20iah0IVChb70rkd5PQ4v1CiGngZ5deA2v2U%2BSqxVYQWL%2B9YDfk%2BaP9%2FhnI69esK66ph8MIEpb4TvZOJKKTMYe2d5SidjbWnAb8OYlM1Zhl%2FwWfQhuRnWwic0cstXAkaNSPSJD8QY87IsuV5y%2BfF9THSSQjZ5JVn3gqcKdaA9AI1DMPQnnNTfuOQXD2eh%2F4abZlv%2BNayx2HP%2FDO4MO4WMmjpxFtkzovSE5kgLG42HtclhWXZXCsGZM1ynlcHN%2BlFgBQxaAheAyVUSb%2BZFeC3lU5Dbl1rqdvTXS3zYkkp%2B2rp2h3tpjbyj9djd23xCvI7mMyungva2lH%2BCe1OWeTd5pXaNDy5XyC0rgHYMiT4uvXYE95cpRnx8GiaWB3FAO0Z3L2p0qd%2FZLP4QC%2FG8xuXxFVVsKyHkW8pAwlkDjElOX43bky36jCSFyCs4VRGjDpA%2B2cUj39z0jU6BfZsqWuXSiz0esUmRDokyyZQG5VbPnbsawV0qOXjva%2FvT%2Bn%2BIGXSHPBvOYTR1Y%2BRxBYV6p1D9JF9MOGzzsIGOqUBnPYLDb%2BSS91vjRWSUJn88zEnlLIcXmCCleFXVXOUGh3fJsTVcyEpU5CR7YzGvXa%2Bi30x4mvYzmtUCVkSJ4yugHa7kcj2vpv8%2BVZAqm%2FWy%2B2LerH%2B3cLJQvAl5EF4N5%2BTSSqE2P7PUG9d0jjWDlHtFFEh%2Bke340RiL5udvQs670QJQ%2BZ%2FW9KKfcXaZh2oh96xZ0ke0P9iE1pskLaGyqeFqfkq65iH&X-Amz-Signature=c6bfdcc9a10c04e321182262b8457d1bd347c86e681c980deffc605a204477da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
