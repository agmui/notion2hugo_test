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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BFHVQG4%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDJ7pP5A7%2BofVMU11HZqvC1E9k4NNDu9Pmawo2ApP6bZAiEA%2BLOQE91NYlQSsBoCdCy1bnq96vlZd0yaqL%2Fs0HyDY2sq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDP%2B0bxrrRVap72htDSrcA4kkEdnp6%2FORKyqhhuPaBMvlfUV0AYh5SDdNfQPhJ8YqDiuMFSyAFutq3xLvyr2GUMvOPZf%2FK1aXXqLzGK1vfMjccuGAsChJ%2BwbpM2RnJnQvOX3ZBk0u%2BxfvgY2IaM%2BTAOy0I6%2B9uan7Z3DJ0Cy3crzDlEOKSxhZCMVzXhFGMWkbJMPKKF05qvbqZwPcClnACdgtm%2FhZVIjZ4i1ytCm%2FAdg8o710jcB%2BOdXKkPk7Ry0ZJF2USexu7hx8aziIZI41c8UKtemPZ25TDGga%2Bqgfre%2FJp3JLRgs1TJeIUlCdh%2B8lPPvyVawWCCY1QiNGUQQgpTGiazcHHnbyx8Yn7mNe%2Bf8kA8cjavTyE5Z8lsFOWYMcljSVYr3qPtUtQQaWGMQ2ytj3bjtZLURS7U7Nf9ZJRU0PLfVW5gZnxGeRyHEAvtXhbmwc5HU25DM7MJYcw4pPSe8Ggx43QAL0PlCQoXHs5%2BbjeSxV0CVLJ5FbYLWrY1ZsnreRfHwdC86mmInaArr7wHOJxysqJpZgdgpbEdKt8mSTqeI%2Bgw9cEUC2bECZfzmIgYH%2Fi3UJn3HIFu4%2FzjZ0AKYhxaKbGrVBkkWP%2B%2BxenSitAf8vl29%2BxwFC3nOyZkTMQcTnCWJlI2%2FaxfYPMJCYz8wGOqUBeDILlkal2xLHjzLbdvaCafA%2FnV5HrVQrJHoCmrA8Az0VPeprec1gchc4%2F6GzR92WUklZ2RS4rwQnMViXepbymzjSn8iG0advdDD4ET3LbVFIihwmZ5Xd%2BrmgpsDazpWtls8o0zrbUOrPruQDpfzGT0lnIKNSepWu9vVn3mJVOi6WpeTM6L28y8sbmEydVq8ScNS6SwJqIH6flqwKx1k8LLG0A6vT&X-Amz-Signature=3eec72b59e782e307379a24b6297214f759707df7743842ad87b6ef4995c41d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
