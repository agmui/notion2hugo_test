---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAD3M4R%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGh%2FRDD7kMj%2FiGtCuzqQmxRQirkrNy3ajQw4KTyIMHOwIhANbYv%2FSzA3DtxMLCHG2lgVc4a0DCrLj%2BPdomopTJ7%2B6YKv8DCFoQABoMNjM3NDIzMTgzODA1IgxgvohhvN1jxYyhKhgq3ANAgibOhAk5Gvd6cahGs2x1vFWsguGlwwpPOe4%2FgSmxdXAHrZW%2Bq1MdVnfeBJqPrenezWsA5uq6OUaIYFpj5HrLp2R1tjvoLuDECaDX8li64sedeOLi6FPEPzTXTJYL4HaBGWp%2BtOuu5c9VyG136rCoTZcVBuzspvUg4EPAes3%2B80Ojxp6f73XzTQSw0Dm8gbxqUXgxNZxH7gW2bew4f3WdwXTmuK8fAGqDt45s5tAKDZQ1Zc2WAXRZmMr%2BeDdpnIWqlunWyBEuyOpGkFYQG%2FGSIuHqC3IyX6mq3LyGqdEXf6YFWgKGo6Rqc97pAeWFlT4O8jX5GnOq47tu%2BIm6Lk3%2F%2FSY0lGoea31WumAozNqd3AarZciQsdDoUIb8V%2Fuzd1N08T6TfCjH035k4rSZbxZcq7fj4%2FLq%2F0OwE7VhuFE70jx0rh8b30Xf9LMSxtoHbw3u6FStyap2Yv%2B2PHrXkWvlpQRkC%2B%2FrRlW4mxmjxo8yKtbHOso5NxNtziDLFtBMOPjFpcyomKxppqAW%2B9nWPicBcLvJWjOYPZp4vhR6ZcHajHCKMSgLZZiQSlBcsnmUgKUNSAXvkN4OXV8BXzPtDN8OqJ%2BPBsnF4cL4K%2B%2Fv6Ylh6Lou7UEH68%2FPRwQzozCUs87QBjqkAWVYndJDOdKIj9aD%2FEsdqDMMjULOKIKhJlhvBF9%2BGt6nHyFiV8Vm1wSubFP4ZDDMFzSI%2F01hpfRox8zqRssBAii4T9LnmJ3a%2FUm06nhnAOryNu3HX%2BffxKkhmlEHRSIRN%2FYnPlp3jbq7MKBwrcgIQKkYEmDvqoe3TiKr352V%2BgIYNEjhE70PbnoltvqsgMU6Sx5acCrUNWubt5nYeR83I6r%2Fcxkl&X-Amz-Signature=134a98849ad8d17c4c7cf2ad9617cb90ce79f72ca44bfe50011c63f0ee3678c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
