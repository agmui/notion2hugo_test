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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTSIN34%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICZPBLuA3ZfEwUpcicrZzR0ptfb4SPkhwAQV0TIw6is%2BAiBnyNMSxgvBhiQdZOJhbROpojeffzvrmqwIJ9HDpeAyaiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRNjU8d55pk2lA3irKtwDqXsFCqjjP4C1hr%2BlTn4QCONQcQvknyZbGvrVmQdQNHn3XQAPu7F2fvM0ECW6uv8CDPaiiem8HI5%2BU%2FYH39Gbd2PT6EXMooHmM8vPhccQKLBrMu3cegbQUNtcfz83LzGzBOuhN%2FmZu%2F5UmbTEjhKYLLTt%2BaONpyNuj%2FihNWX54NRZJyPD5w9Wfkv8uFds%2BWPqnmLEP1X3g6%2F9QUkYH7tp7SMxfh8eS6htnv6BC58K0l%2FkGs0g8gaNNRfEc8aoQZZQq7YHMDun%2BNob7o676sQn3CfkhFP51YOYbvE3vrHTKjckx9EmxTyNk1s9eqp72BWCXtGcTZsVgMgjf8wQYfYTFu9fvRLWwdmeWNlMfhqtJGfu8MBhkjzfhehdtJV4368Gvfl25H0cdqi1IAgBIbVdtUviUPSnWS44vgXRFAXq6qyRXaITR3pytDRvGvUztR%2F3N6VgV9hkw1LdlMlxYj9l2Cz2KpoXMj9BIbnO43nGhX%2By20ony%2BKCWzCIQhyO%2FSV%2BWdJ6yU%2FckW09cpgrIN50KD2hWd0vac%2Fg1kWrYUHEsNJUAD6N6QQfcxbmUtWfte8w%2BQmIshsd20iNilvxh18mT6LoxROgPGrPkSS8W4m56oZtSBTGzLmiE1RlkIIw%2B%2Fa6wQY6pgH2XfcCmB7nx4Id1oY3pe5%2FzFrrHncGpyp3CXbsw9FkRIdgwxNq1e37tzRKy1PN%2FgTcjnrUJMtzneDsUbk2pgWfdWCWeXzZ%2FgDNhtuKDGGVNN5L0y87EwNSvSek4Z18pcxLFh4mms8ZS68Y7G%2B%2FxEFRkIXgA%2Br0fXYyyYuItmhyZaqFM21KU97OMTS2mLHCyZK4%2FBU%2FAZKtoWIRheFv7Lcf4Ha9oSGb&X-Amz-Signature=f5c48f7423f38636a899e8265d37ada16caa1890786b1ec3a9c7cca88cf760c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
