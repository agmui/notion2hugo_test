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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GLEQWM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICPOiZH%2FISCO7cbuSZh6bTO1HeADpULaeYLkcmQ9yYi3AiAIDpbcbfwteV9kIur%2BqeqTr7fP0D5Sz3ri%2B6l8zCp8vyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyJYZiScez9go3isuKtwDc4Jps%2B3Jv0ifFgJ0HGs1mFCW50%2BtCUjim6NBZ0UF%2FU0SUjosU%2Fp%2FeeaU20CIRNakvCOg0MaJ0hUvCsCINjEV4bGoGcUupRpWaLZ0z2pjRoGEqHP653jGqhQaBEvVjPYA6oaLU94pK0XEY5nhyPzYT8jEP%2FzUv2aqFmhusMT6Et04EiJ20KwghnOYUDbRHJ13PWT8lGiR3rP%2ByEB2PYrV%2BEy0I9MKmglrwQB1%2BdfEK8koyCwBptHGvKA40w%2FdqFF%2Frh6%2BzRWS8M23MlHFTlpn2eYposqjUGOpHVeJEwMyi4ADhoC%2F0TiOk%2BTi1lIM6il6dQKDWI4BUg%2BUrhvIp2sxSQn0sB9%2FJNuyICj2oKNqaatUJ1%2B08LOB7YRWWxssBHzBFfJLJnuptPOUmku5%2Bhwsbfj7auRLw53fXt1zhUezKhwJUXUaLybJMgmQ7pssRYj8cKK7TgjcDB%2FHCWY09cGuzrFD%2BarlwbBG%2BCulGxeVAgeY9ddhuVX%2BiDTUstErcs3j8veFZRdEJuRK1zj4r4TiwIBrPIMWUDk6%2B7Q1F0cRYnDIZCpsqvv2M%2BQ2%2BDjIVFPKG1JmYHGhrFtf8SrPcZQnwxhUuW3EoF3OPEJLWZgsarBuBlMEL1RndSmxEJQwg%2FbaxAY6pgHI3S%2Bu5OSi36w%2F3DAGr7gWmZyXJxEdL4uQNdqL46TF88jd9Jn6qnsnuTecoWiPdUlv2HOXkgQpDJC4g7MsoTVtC4lOmcn6fLm9qki2swnLM8j4eW1BZa8RI8p%2FSLsco1KrWI4P4eGikYqtpFNwtGLOsfpHS3IFA7SUvHQMq4lHe6OaOoS4iS9fDFieLYpG6fc0lJ7vYYzhFwsqAzRrhDe0uMw4x%2FWC&X-Amz-Signature=e3ffb50d7519eb4d0d4e6a181b0e16968870e1d866d8ae99cf3cc420a469257f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
