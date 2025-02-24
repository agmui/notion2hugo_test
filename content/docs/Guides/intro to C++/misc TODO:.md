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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFXVGEP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEACiQrsUpOMxy0NNpWrTHKPH63EOuukEvsIpdBW7BbYAiA1v6MjSXsu2v1Y9CfQQYoSOjR1UCliUb7TbAzPg7%2Bpoir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPd6BvZgaOsSf1%2FdeKtwDfRQSSoxyTu5Zj9JsYTcOQNyU68ivdnfOBp56LjNIcFCYCDLX5O61tP5lSRWRNmNi%2BPyjNjhyIksxSmeOQkpZvTWgH%2Fqz9siQgNBO8BXT4sW4xqmALVoVwSSG8KkpMTmHX35Z1spgW6eg1Fmy1jrAZHV4iPFDrErhiHnA3YsJKHQ314OBFgwkVqk670oiDXgqXlarr0uLJK2RuAUA9W9UeXCKZR8vqUF%2Bnd1AcqrVcnJy2Z%2FOAJBfDvr8B%2FLwFlL0Fy242KjgcNguW%2BtqRl1GGVZPhas5qubGCfcodLp7OQd3Y9wEgPvLJuQd%2F5LA9%2BNTw9SGtyHyqEGqwju7A2rVGhvnahSrrCCAqWvPVvje3ZrLiGIM63rTm6lur4CTc8r2IoOkUuxkdvbV2t%2FbnyMhSTDOHWrS0arDQ1xpmEVXqEArhI6McHb8VnYeX%2BN8GaXkWycelMJRYqjmspa1yyn3C65BAFwJcQV1gJwgkv3v4pJbLnA4mvZfzIwq9lgg4vLFeXQhm9F0A0pjMwae8VRGejGRklq%2BDrIs2Ao4PzGrae9vjMfTFPJZmQGf9RJqtOUmlc%2BcmmJyDhBJdJzU4YjEnndEkVexd%2BiSRr5L%2Bl1KyRNUK4rlrTv%2Bvth7x6Uw%2FM7wvQY6pgHQRuoc7S6Auv9TPfDPCMv0Y0BfOMa3jlRTeDsMWhfHVwE0uy38cyRyznVypX5Ziv616pU%2F8uuw1pXQGCu8L53J%2F9uRI%2BJE7kFukF4HfsDp5vgHsG3JJQ0BJ9unRIG2UIR%2FJKkswY3XzaZ3N9vmfaQsg8NBT8Ci2Si5a%2F16TgsrS%2B9fFsIsUOOwXUDMBY%2BlbvUQYOIZR1JJy2jyGniucLdDPbN%2FfqMs&X-Amz-Signature=3e2267f1ea5b551defcd78e951c56906d6a550002586998ada77cfc235d9bd39&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFXVGEP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEACiQrsUpOMxy0NNpWrTHKPH63EOuukEvsIpdBW7BbYAiA1v6MjSXsu2v1Y9CfQQYoSOjR1UCliUb7TbAzPg7%2Bpoir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPd6BvZgaOsSf1%2FdeKtwDfRQSSoxyTu5Zj9JsYTcOQNyU68ivdnfOBp56LjNIcFCYCDLX5O61tP5lSRWRNmNi%2BPyjNjhyIksxSmeOQkpZvTWgH%2Fqz9siQgNBO8BXT4sW4xqmALVoVwSSG8KkpMTmHX35Z1spgW6eg1Fmy1jrAZHV4iPFDrErhiHnA3YsJKHQ314OBFgwkVqk670oiDXgqXlarr0uLJK2RuAUA9W9UeXCKZR8vqUF%2Bnd1AcqrVcnJy2Z%2FOAJBfDvr8B%2FLwFlL0Fy242KjgcNguW%2BtqRl1GGVZPhas5qubGCfcodLp7OQd3Y9wEgPvLJuQd%2F5LA9%2BNTw9SGtyHyqEGqwju7A2rVGhvnahSrrCCAqWvPVvje3ZrLiGIM63rTm6lur4CTc8r2IoOkUuxkdvbV2t%2FbnyMhSTDOHWrS0arDQ1xpmEVXqEArhI6McHb8VnYeX%2BN8GaXkWycelMJRYqjmspa1yyn3C65BAFwJcQV1gJwgkv3v4pJbLnA4mvZfzIwq9lgg4vLFeXQhm9F0A0pjMwae8VRGejGRklq%2BDrIs2Ao4PzGrae9vjMfTFPJZmQGf9RJqtOUmlc%2BcmmJyDhBJdJzU4YjEnndEkVexd%2BiSRr5L%2Bl1KyRNUK4rlrTv%2Bvth7x6Uw%2FM7wvQY6pgHQRuoc7S6Auv9TPfDPCMv0Y0BfOMa3jlRTeDsMWhfHVwE0uy38cyRyznVypX5Ziv616pU%2F8uuw1pXQGCu8L53J%2F9uRI%2BJE7kFukF4HfsDp5vgHsG3JJQ0BJ9unRIG2UIR%2FJKkswY3XzaZ3N9vmfaQsg8NBT8Ci2Si5a%2F16TgsrS%2B9fFsIsUOOwXUDMBY%2BlbvUQYOIZR1JJy2jyGniucLdDPbN%2FfqMs&X-Amz-Signature=1d59e1e18656ee57916947a02bca79caf8733eab5b3a7a054d3c52a2634f0f78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
