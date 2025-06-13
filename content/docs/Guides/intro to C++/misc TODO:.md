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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2GYHIC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDtF7ecWWgiXT4Dgt7nUOEOz6lOcfbvKl9sIX0CqYPcbwIhAJJ0MBWwUzGRwcbvbjusOUFxBRllHQlL59pxP0qYfKwDKv8DCB4QABoMNjM3NDIzMTgzODA1IgxeQeXWSn1pELWqZQYq3AO7ZoJMYQbijMT6mOEAfjcsfq%2BlYE1EvH9na%2FIKm8CSCxwE3cmclfdj%2FguLKcpVFRpcG9K%2BNFtGyr8QvYqRzTyX64M3Qw2JG4XT1wxQAHrld7tB%2FarA1q%2BJRDh%2F4ea7GsarR5Z3GJSkjeRM%2BxPBIUC8I2u9u7Tgxg6jrveECGwfamrhDHyOUNnyL9tS8inOMfnXqicANGsffMYQzdnqqJNU5Kv9J6kQ0fS5XA%2FknIVFYEPdORW8ujYk5xLo15ZktmMjZeE6udEtBANEI7KF4NjRmZd5O9jtcKuPI9D21A6zxPhX4wo2Osas62kgDjhwxhGttDZfEHraOfWH59kAZ6O4KhnNscdYudByetljGIqamFYzpgeqWH8FIUV7wFI7n7KMncEVpnlSKhVk3MmSYI2ak1ZC36Gdve1KcZ%2BKaKusQuqokd4S0zQpjG%2B83%2F6SXc45a62B4lYwiuyAUiU6U9GdjFIFKBn95xN5NMLA9uquJQaV0Z0iy5PkdEa7tS8LJpyqhV%2BGpRvPddxvKtvvVVtCqPDmm1KbB3RMLSs3r1FEzoH3COiXj0MQcd%2BCAymIPVECOvOrnMzmB30cylU63sU2vtTkHdIBV%2FunPUt4ad3mkYfs3ybAVNT8b6MD8TDVkrLCBjqkAVYhGHedKTMwCy%2BldbgHyu%2FJnYMPWlAX7taJ6A5m4nGQqzkcK%2FbRXDH0kxf1hhpRxpdBPdibXSHP3%2F8dWp0%2BsAqIUAsxQ5Qjr1cfhS5AVKmGx8Xwb3iZiwbSPsIAJKDV3PgbdLhndUDkf5I%2FktiUxJ2DVTzY9LumqsgCX4vwv51f%2BFcRwP49Z8nu5Ab3%2FyXcH6oCVtCjHyFbm3E%2Bee3bhjm5UJnl&X-Amz-Signature=b4fa40da2d3620699da3ff96a0badfc0f53c9218fad668e306ea418e73233242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2GYHIC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDtF7ecWWgiXT4Dgt7nUOEOz6lOcfbvKl9sIX0CqYPcbwIhAJJ0MBWwUzGRwcbvbjusOUFxBRllHQlL59pxP0qYfKwDKv8DCB4QABoMNjM3NDIzMTgzODA1IgxeQeXWSn1pELWqZQYq3AO7ZoJMYQbijMT6mOEAfjcsfq%2BlYE1EvH9na%2FIKm8CSCxwE3cmclfdj%2FguLKcpVFRpcG9K%2BNFtGyr8QvYqRzTyX64M3Qw2JG4XT1wxQAHrld7tB%2FarA1q%2BJRDh%2F4ea7GsarR5Z3GJSkjeRM%2BxPBIUC8I2u9u7Tgxg6jrveECGwfamrhDHyOUNnyL9tS8inOMfnXqicANGsffMYQzdnqqJNU5Kv9J6kQ0fS5XA%2FknIVFYEPdORW8ujYk5xLo15ZktmMjZeE6udEtBANEI7KF4NjRmZd5O9jtcKuPI9D21A6zxPhX4wo2Osas62kgDjhwxhGttDZfEHraOfWH59kAZ6O4KhnNscdYudByetljGIqamFYzpgeqWH8FIUV7wFI7n7KMncEVpnlSKhVk3MmSYI2ak1ZC36Gdve1KcZ%2BKaKusQuqokd4S0zQpjG%2B83%2F6SXc45a62B4lYwiuyAUiU6U9GdjFIFKBn95xN5NMLA9uquJQaV0Z0iy5PkdEa7tS8LJpyqhV%2BGpRvPddxvKtvvVVtCqPDmm1KbB3RMLSs3r1FEzoH3COiXj0MQcd%2BCAymIPVECOvOrnMzmB30cylU63sU2vtTkHdIBV%2FunPUt4ad3mkYfs3ybAVNT8b6MD8TDVkrLCBjqkAVYhGHedKTMwCy%2BldbgHyu%2FJnYMPWlAX7taJ6A5m4nGQqzkcK%2FbRXDH0kxf1hhpRxpdBPdibXSHP3%2F8dWp0%2BsAqIUAsxQ5Qjr1cfhS5AVKmGx8Xwb3iZiwbSPsIAJKDV3PgbdLhndUDkf5I%2FktiUxJ2DVTzY9LumqsgCX4vwv51f%2BFcRwP49Z8nu5Ab3%2FyXcH6oCVtCjHyFbm3E%2Bee3bhjm5UJnl&X-Amz-Signature=86fefa76fbaf44e69da29aea2cd193e64652ab1ab4c929ebd1db3a96c3ad9e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
