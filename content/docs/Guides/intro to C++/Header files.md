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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYQ5NHJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCcxaI9bNRsTyv0Eq4nhr8TQf9LOYfVUWqCxhEtEMT5iQIgDJVXu9%2FqE9SPq7ppyeOzFhwBZNE2HRMmd%2Bt6VjbEn94q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPXyRlNxOgkvf6QCPSrcAwZLHtf%2BXv0hdDEGSQQGX%2FECwS2OQ2G7eaCZV44rKJZHysSmX8xTUdd5jmSsxRliB7DOkBcNFotY57tMZD58EQLnPHsQRcFP1Cm64XA%2BHRhigpmAPYOCEHS7k1rzFUCXLcQn6mUnpRtgy38MKEk1kOwghvTuV59%2BmKCmzqqFBlH3qgklppr3RLdRBw7qGgeCpBl%2B2Ra4JakrdedNQ%2FTINwz8SXt6XU9jkM%2FDigeO31SoYoykYJakW4Cnd4YwVRoHdZzI2pF7uZJUYiEib%2FoKbN3ygzHIyUM1301pNEPXob%2BD%2FQ4jX841jASrnV8LmJ0zgDxHq6HTLZhvPmaV1dtpfT22SKzcBl9onH%2B1WdwazRO7%2F%2FJ6N0TMkLeWgF3yr1kIP%2FoNIR8YscvxSh9yo%2BtNaP8GB8%2BU9zM14XxspVDE6LSQmumou0nCoXMgiHl6xwfzup7p8Rdr00WggicfKh9xtI9mux15MzQAnstG5aokW7vNMsJDvPx5vPQbYeIxxKbVNpPCH2vFbFZDl%2BCX7XwaOlCOj1WLbwdQZPOB7sLAxXz74RTevhAC86WSuZexGpP%2BaMOyDDXqLFFlzWT4or6PNu8xD29gz9LezAhiHwu1a8RI7V%2B4zWHeJWUbifhZMP%2FJyr0GOqUBegWk6m4rUnoN43Ed2hdomJIsGk0y3JMa7cfYC3nzOgBS0MMm25QDAeU%2B%2BtdMpsJenLoGv8MyuOxEtWEHFg0E6xtRDefwWc9vmXuCCXnAm7Gx2OCw1fC32PbxJOP1mRRcUYqTnI%2FfeVckpPPLJvwxpeU6ikqyvTZRzrMMoGcJEjqUPOFJHCV4uCL%2FSryo9MlSPXozVIuoeYeUpa2ql8Qhki%2FXhpcA&X-Amz-Signature=782796b13c4040e689713b178e3b19813ea35f9f122860cdabe2c0452dcd812e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
