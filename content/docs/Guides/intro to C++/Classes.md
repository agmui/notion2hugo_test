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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGMSFU4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH%2FRYJLrNgi0Zihm7zeXLOt%2FqQnaJJjFDzcLCLgB5FsjAiEA4Z0lJZUZ0CLxccsAzQSwKbeMS9vboClm3iPVoLYpEfgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHSOrv01L48%2BctPp9CrcA%2FH14U4EsxOK6B4WV3jGzJCb%2F5m9XI0MbTU%2Bcfm0gYgUsjrUB33uPqzdkQTx8AeDLknb2KzYc0Z00WVHzFa71mm%2BH60QhOgyAlGmKTvanWe8YrFF4yVRxXViRdNQCsZKSl4WD%2FZG%2Fdb8LtaPmM7G7yHr1F%2FX8uKsy2JEyw8agjq0j3MGSB6mE%2BkRSaHTUZCcN7iO0NjBU4amt%2BvvGNWukmptDj5%2BDRJfEScTQVbDef0TqcAdJqVJyX6viCIT0HFmLhpCbvpoW2anm%2F2y%2F2lJr8b2QilxlTnCkv4Yb2T3KXCLJgQly11hNlhYiZLqMmWwRZpx5wI%2FPkzLPRQ02N3Gyj%2BwVhaZcAPKza7ShTzme06C33tktq06WKX38J2VrkwFCDTWyR4sw%2FyOVbI4pafS6CjLAovsGba1rdWlc%2BrI4XFaCCeQcUVq8XAvsBZDXQ8u9FPamZZgYKZSP%2FVU94bVIXdvSlbITh2NAryP9okR9TINT%2FjlNkxJlb5XeT3VQ7fgEHSr22Bpoz7zXWEW8yowO1VIGbdpNTlhQMvmQ4BXAuvS%2B4yp1EG%2FN3Pk8HMJPO5QD6h2D4KrwnTvKaxnhR05u5y5M%2Fuu5UH4aAV%2Fn%2Fh8EBE%2B2jcedWGao1%2BHg2wqMKTrg9QGOqUBSh117vDJ6NMr3ueLSWSZrx78arvorpLUMHZeUkSEp8BJfNl90jZPgA%2FFqoKhMTOQGxCBrtx7j4ahL5Gw8zqbY3BTVkjuDnCswg4nUZwqJK%2BPAAeY%2Bm3W1gM8UKf2BnyXCLJTUOpA9ocL13wQtrzfi4VQb3Rhmpt%2FjavkX5%2FMwLnxy9w4iwltzeXlTBAhBNgL5StdG1PbQNGeBtdOZjv%2FIr7KvgRU&X-Amz-Signature=1a44925be05c05ff7223e94c6dee3041b5aeb94e96a026e2633a31b185c0e033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
