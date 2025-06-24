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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHN6WEG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCA0H1iZfPUUYSLZpemOOojEHQ63Z%2FBwA5Vzc3V5lSoqgIhAMM7C7kcLLJ6H%2BDqTuht2TDBOCMJWpkDtIXcAY7KbRKrKv8DCCsQABoMNjM3NDIzMTgzODA1Igza6w17FbpqYmacuREq3AOBFzuBR1jRIpojRegk7WSQRHYj7ImoWX7qOkco7TlopRopro3mYHj%2ByitcHfKrOfZgns3maSLNsQjf6oGqQ4AiJ2XdgicXLcO%2BswnOS%2B8oWl%2Fkjh4aHlfbMCuDiZ7z6l6lTX3YjA9h%2BQ92RvrdsBhqpxWJ7TmWN04zfs2osWes21SCv6sDhXbF9hfaiCv7m3%2BtuWfXelomtGuqJJAMvIZzNpRPyZOdnL7bMztnYUd0SXZ%2FYdYjiMEUH35Ml5%2BFqanXd10yO4FOo2A326wwwqcm1Ge%2BccFRVmRbP9eIk23tMgOpuf4ZpcCec7SBtTgsN1iQTVIAlXjwY%2FXZCs%2FisQNOw9KZEzCcpC7O7liFbPprroSFTIp8p3zInQtjaKygOIzObSJcRF6V5WmxIecKZhYPPdXp%2BRDb8RvGEIUI01fVR%2F3pr0vBEHxl%2B3F%2BRNJY1T8tEbwfff3lxWxqgvtG42Uh8m2PM%2F6iHsi%2F9UpqO5xIDSQo7qnF56ktnCSrgPk%2BxaeO%2F2sB26tkAWuVzVDXsI5BEpir8Eud4pAqOTLiHH13Z2FFwLmN86c1ZlJHW7MZ8E5iLVWw%2F5hXZLnKFzfelo7dhT6bGGZH9h6ci5dy87irha5HV8jj4zDWlt0sYTDr%2BOnCBjqkARNOXvYit978bGCF3efA%2BZTs0gcw1tflSNpF6XO5llwvFhzgEtOXm0r6TqV1ksZ6s%2FG%2BNfIuejdVq8rqCRWcPzOj0wWeX7nrKwkMJ7ly57PJ5e8sqg6W39cnAZms2T%2BGcpqq9O1jQiQJeMC8YhGN%2F6yKzNmbFADZ4FvP7%2BybL2mZf5avXSIjano71lk3ckXEJTzZAFHZMiUgZGjnkVaFUYKpwZKU&X-Amz-Signature=f4faf308ae2f25099855743412cb71ff5902e07f37d79a49b725530da4865d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
