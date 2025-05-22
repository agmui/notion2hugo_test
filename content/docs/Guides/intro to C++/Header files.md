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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVAJRGM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIC%2FxBhYYivPbFuWPk4BLwjKCiUPlIZmUr9%2BoPOXvgCfIAiBA4gPXFEH7kBvWqNHI%2F3nsXWvANJ67x3gpXSHi649XnCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2caJ1iiaju7jqhXKtwDfkq14gxJHUwrcjbW1oDyAtuyBwSPB8tw0mnMo2tZOI4PeEtS1zsRT%2B%2BwP8vpLqSr77Oayfps5HsUifR0wmXF6X9RqAjAuh1qJoLEignkjDtz8gw6EFXcX05iZQkG3yMpsk4rxabTKUAiSaAmScEh6EDfkB9CSjj74K%2FSlpdCWpNT4uDBZpNMOHebyWYTSIwK%2FcQJz7H1f%2FtJuAwvRLxLzIzdYBgblrLchGrINW5qAXHVRnDIznT1oICCBF%2BRzGVGhqCQ9A34pT0L7bL%2BzAym39j6SPbXNaGqWZAtION%2B00tQxTz0DvbjYd4yi4RzqMUN8EtQEkZwNr1OkNJzM3e1bRRxDH%2BmpbasIUerxcA6j%2FEICDQG2f4YDMM4dEpRPCPSBloLMRQLz%2BqmVjFvotUGopD5bfXtzlJAbHXzBfuK%2BoELup06OIUYn86x%2BsZyScpE7OlPqkFcqVmfcQN185z8wcpCztHUh9W7iSstA58yxW9%2F%2Btq8I%2Fyli2n9W0BC3UPgLcqxMSjZzTIlBAVlQM3Ot1EYXSGiouj9bgM%2B%2BZv3xEGYC5R0IFopH1u76VygZFLWO0Dc1ozPTfC%2B0GK4KL8WXPWp9hKcFKNKvEvs9ArNJSG7ImMe5Zfj%2FOG3cO8wtMG5wQY6pgHb2f%2BCPPLymJgWA1itUa6a3g%2Fek5ePObS4LEjFVabp%2FGhQN7IIwgS5HXGUIGUnEY5pa8AfxLF%2BliE3zY2nPkMvu0WNBpSwv55cyIfr82yC47eks8P48pioEEpi3jvNwjAVg7L32FnhLI8pdQKuwDEu4U%2BFA6o3y38tAI6CdWciB9APK4Ps%2BGIkKDMZelfGhmgHMw541YzYqUcEkrUqbmMP4ll6wC%2Fa&X-Amz-Signature=e652aafb2e46d0ad53175c25a150239e7f46bbd86c7a667c9f30e35dca2918ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
