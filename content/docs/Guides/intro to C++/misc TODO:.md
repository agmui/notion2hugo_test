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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVRNKS2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKHfXpKRRBi2fuP87zBt71mbtqtVakzXtt%2BqdYMgqv4AIhAPXZVQWtDcU5PEhgWWMwsRC4dn5rHuCVHOQfj7UMQVNAKv8DCEIQABoMNjM3NDIzMTgzODA1IgwUTk1tQ4SoUi5cTXYq3APrgCzrgpYFo98kov9gH1ACXesXeo%2BX57OUVNid2nn21s0Hg0j4tqlqBUiD2I0aymkSAZyTzW6F63XeK9aULy6iZvMDVj48CIRGrFFzQvQ2iLLe6Lm3o1n023YScTqAS%2BFuvY81fqTsLkYPxCkM36ZH1ZleHJrYCcJy2YxawlrZkab6zA%2FS2GTU%2Fn98Te6BVUoVAJSl30BUqVQm00zQo8kD4irXaoyUERVSs7Eqz%2BaSlMmdck9fhGnVo6CFIO64nS0EOumtSHL%2B1zl96en6SvF%2FhnofeMRvbDCswtO1FxZFdFcknARXEePVKFq6Zzx%2Fp7A4z5PoQyhtHkYl0PBlsitz%2Bkh27UVcvNwOk2E5g%2FvItLcmxeVi56HeZKIocARwwHHsNQi4lOCmn3uIchAbqtffbB4KAa9P8BIxL3P%2BGeZksA5mtmgdg7aER3AQ%2Bpk9lSshYJwUS4WjMTisjah05jW6mJ%2F7JKVSjiK2pSAzPEkq862EUgwkrcwlb1jDyieVM2164U9J%2F%2Fof3EJdtz2W46VCM4tPLldrNRqvwp1VoYi73cSUzRO7ZoT2NHVeVn%2B6AcKtwybEszTl3iapZftji%2F8VSvl3KH0Jlg1ZtXA9cJq%2BV5oMWBFF5HvjpYZ5SDCxlbrCBjqkAVSguD%2Bspe1PcVdBeOr%2BEUAjRqS3ZxNRgTy9i3GbldVbp9CMFX8I1NNrj7BXEvmd93jIwVSmtzgGhLkvW%2FmLVouQPB0EHUc3DgfCow2zEATk%2FuHyc8VaMX%2Byqmd6whdglMPiE4n1TP2e9o0%2FC0Un9H6l7j6LmCEAPNXxVwZqkQFinrMvpknvF5W4WxOFip9k6sOWyzfvsFOcVRPN8Z0iaCs9OFpA&X-Amz-Signature=1a29d04306cc3cf695f29fd8b36386621f2564065bbb6229eded61ddaf31a37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVRNKS2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDKHfXpKRRBi2fuP87zBt71mbtqtVakzXtt%2BqdYMgqv4AIhAPXZVQWtDcU5PEhgWWMwsRC4dn5rHuCVHOQfj7UMQVNAKv8DCEIQABoMNjM3NDIzMTgzODA1IgwUTk1tQ4SoUi5cTXYq3APrgCzrgpYFo98kov9gH1ACXesXeo%2BX57OUVNid2nn21s0Hg0j4tqlqBUiD2I0aymkSAZyTzW6F63XeK9aULy6iZvMDVj48CIRGrFFzQvQ2iLLe6Lm3o1n023YScTqAS%2BFuvY81fqTsLkYPxCkM36ZH1ZleHJrYCcJy2YxawlrZkab6zA%2FS2GTU%2Fn98Te6BVUoVAJSl30BUqVQm00zQo8kD4irXaoyUERVSs7Eqz%2BaSlMmdck9fhGnVo6CFIO64nS0EOumtSHL%2B1zl96en6SvF%2FhnofeMRvbDCswtO1FxZFdFcknARXEePVKFq6Zzx%2Fp7A4z5PoQyhtHkYl0PBlsitz%2Bkh27UVcvNwOk2E5g%2FvItLcmxeVi56HeZKIocARwwHHsNQi4lOCmn3uIchAbqtffbB4KAa9P8BIxL3P%2BGeZksA5mtmgdg7aER3AQ%2Bpk9lSshYJwUS4WjMTisjah05jW6mJ%2F7JKVSjiK2pSAzPEkq862EUgwkrcwlb1jDyieVM2164U9J%2F%2Fof3EJdtz2W46VCM4tPLldrNRqvwp1VoYi73cSUzRO7ZoT2NHVeVn%2B6AcKtwybEszTl3iapZftji%2F8VSvl3KH0Jlg1ZtXA9cJq%2BV5oMWBFF5HvjpYZ5SDCxlbrCBjqkAVSguD%2Bspe1PcVdBeOr%2BEUAjRqS3ZxNRgTy9i3GbldVbp9CMFX8I1NNrj7BXEvmd93jIwVSmtzgGhLkvW%2FmLVouQPB0EHUc3DgfCow2zEATk%2FuHyc8VaMX%2Byqmd6whdglMPiE4n1TP2e9o0%2FC0Un9H6l7j6LmCEAPNXxVwZqkQFinrMvpknvF5W4WxOFip9k6sOWyzfvsFOcVRPN8Z0iaCs9OFpA&X-Amz-Signature=c0e7f0131bc564dad850fc730caa6e673a57b0f82673407c0e4a6aee4578b646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
