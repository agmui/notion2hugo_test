---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ORYJIO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHItBlDlMya3RYt4Dn940Uk3jdV8219U2RepYXAcEw11AiAnQU%2BiH9MdfWaGQknBVEbbeBZGQ6bcREp4yKidjQItxSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeT06DnJZyYmI%2FpLjKtwDmghpYIsP0iAAei0nSPwwjsHv%2BbK0kj4pu1wqkjzZh48hLMCCaNX%2BcSsQe3Wn97isa7RoaW8lpcj5yZCqhXzDuGSXW%2BPgkrHRMLhQy%2Fwkq7cxCC8yvaFCjoo2SOHyF22bT%2FhA9h5y4DKjMzAaS%2BPSL1whtWeTx6EcZLxF%2FO6z6Vrm%2B2X8qqbPpJw5KxV2YwysLZl9pGdUrVWvXLH8%2BLqtBqGXvFGDcoGitWhhs9gmhxGU9hWH4slh2ZB%2BtM6CS7G%2FAfjQRQTFP5%2BLVoqbsFf6sEYkkmHJQ9oxupLz5z34fsv0FO%2F7U8QnbZnWokbMbvM%2B543fXWtgFEBVrFBN0TwkwmoLaZAw7iQjZXRKGIiJatvNQuWti3FZ1RnikhCsWwHUm%2F3%2B%2BLUhpw16uIyoKGP8xhgT5TTSvdARCsZjdDgeJeccFWRIMGmGbWUKYdjsIDyxeCXxIUYLrdmmexOKCq93CnTnkZweex%2F7y11L3BM9rFIyTq4Qbj8Fr047vMbQCxDKUalyEB6yyuxTNUPCPfrSr8NA49oEWJtZ44aYsqcz49ChMBDT%2FXc9TUXSjfhIVjbthtCEJ8v6dFb3sr7qhMla%2BawNJPo7paZZdeGkyIpoksEh4rYchZIiQxXVuZcw6q36vgY6pgH4G%2Fzsq%2FhRPJ60OGsHbf0hFK4oAfQrMi5NW0%2BRzRzK5PjtxcpgntapEa72LNhUSKP%2FHvNnv4dd%2FAejYHzcTnquGfx2UL6ARU2id7k3mnE6XCldcmjCpimO5jeRKFEzxfiCs51yNYCngVbnS3M5X39j79%2FFiMKXqvTCmaWo8%2FhGgDe7p3DjMLqAvfppzuNUBmzGvc77Ts69vP%2FddEn%2Bpi4f%2BY0NftUN&X-Amz-Signature=da746a57868c54872a45c0f062bd2b678d21fdc19f887c200d0599ab87158696&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ORYJIO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHItBlDlMya3RYt4Dn940Uk3jdV8219U2RepYXAcEw11AiAnQU%2BiH9MdfWaGQknBVEbbeBZGQ6bcREp4yKidjQItxSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeT06DnJZyYmI%2FpLjKtwDmghpYIsP0iAAei0nSPwwjsHv%2BbK0kj4pu1wqkjzZh48hLMCCaNX%2BcSsQe3Wn97isa7RoaW8lpcj5yZCqhXzDuGSXW%2BPgkrHRMLhQy%2Fwkq7cxCC8yvaFCjoo2SOHyF22bT%2FhA9h5y4DKjMzAaS%2BPSL1whtWeTx6EcZLxF%2FO6z6Vrm%2B2X8qqbPpJw5KxV2YwysLZl9pGdUrVWvXLH8%2BLqtBqGXvFGDcoGitWhhs9gmhxGU9hWH4slh2ZB%2BtM6CS7G%2FAfjQRQTFP5%2BLVoqbsFf6sEYkkmHJQ9oxupLz5z34fsv0FO%2F7U8QnbZnWokbMbvM%2B543fXWtgFEBVrFBN0TwkwmoLaZAw7iQjZXRKGIiJatvNQuWti3FZ1RnikhCsWwHUm%2F3%2B%2BLUhpw16uIyoKGP8xhgT5TTSvdARCsZjdDgeJeccFWRIMGmGbWUKYdjsIDyxeCXxIUYLrdmmexOKCq93CnTnkZweex%2F7y11L3BM9rFIyTq4Qbj8Fr047vMbQCxDKUalyEB6yyuxTNUPCPfrSr8NA49oEWJtZ44aYsqcz49ChMBDT%2FXc9TUXSjfhIVjbthtCEJ8v6dFb3sr7qhMla%2BawNJPo7paZZdeGkyIpoksEh4rYchZIiQxXVuZcw6q36vgY6pgH4G%2Fzsq%2FhRPJ60OGsHbf0hFK4oAfQrMi5NW0%2BRzRzK5PjtxcpgntapEa72LNhUSKP%2FHvNnv4dd%2FAejYHzcTnquGfx2UL6ARU2id7k3mnE6XCldcmjCpimO5jeRKFEzxfiCs51yNYCngVbnS3M5X39j79%2FFiMKXqvTCmaWo8%2FhGgDe7p3DjMLqAvfppzuNUBmzGvc77Ts69vP%2FddEn%2Bpi4f%2BY0NftUN&X-Amz-Signature=a007bbf4fdbdd40e633b72eccb4d8fe8a399002436e12f565fbff231c16e2062&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
